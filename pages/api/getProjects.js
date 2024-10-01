import axios from 'axios';
import { S3Client, ListObjectsV2Command, HeadObjectCommand } from "@aws-sdk/client-s3";

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://379pj43m47.execute-api.us-west-2.amazonaws.com/default/gvsGetCreds");
    const s3Client = new S3Client({
      region: 'us-west-1', // Changed from 'us-west-2' to 'us-west-1'
      credentials: {
        accessKeyId: response.data.accessKeyId,
        secretAccessKey: response.data.secretAccessKey,
      }
    });

    const projects = [];
    for (let i = 1; i <= 15; i++) {
      const projectFolder = `Portfolio/Project${i}/FullSize/`;
      const command = new ListObjectsV2Command({
        Bucket: 'greenviewsolutionsimages',
        Prefix: projectFolder,
      });

      try {
        const data = await s3Client.send(command);
        const images = await Promise.all(data.Contents
          .filter(item => item.Key.endsWith('.webp') || item.Key.endsWith('.jpeg') || item.Key.endsWith('.JPG'))
          .map(async (item) => {
            const headCommand = new HeadObjectCommand({
              Bucket: 'greenviewsolutionsimages',
              Key: item.Key,
            });
            const headData = await s3Client.send(headCommand);
            const url = `https://ik.imagekit.io/greenviewsolutions/${item.Key}?tr=w-700,h-700`;
            console.log(`Project ${i} image:`, url, 'Size:', headData.ContentLength);
            return {
              url,
              size: headData.ContentLength,
            };
          }));
        if (images.length > 0) {
          projects.push({ 
            id: i, 
            images,
            name: `Project ${i}`,
            description: `This is a sample description for Project ${i}. Replace with actual project details.`
          });
        }
      } catch (err) {
        console.log(`Error fetching project ${i}:`, err);
      }
    }

    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Error fetching projects' });
  }
}