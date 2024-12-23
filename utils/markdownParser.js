// utils/markdownParser.js

import { remark } from 'remark';
import html from 'remark-html';
import path from 'path';
import matter from 'gray-matter';
import fs from 'fs';

const postsDirectory = path.join(process.cwd(), 'articles');

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}

export function getAllPostIds() {
    // Read the file names in the posts directory
    const fileNames = fs.readdirSync(postsDirectory);

    // Return an array that contains the paths for all markdown files
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '') // Remove the file extension to get the ID
            }
        };
    });
}