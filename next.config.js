const { GOOGLE_MAPS_API_KEY } = require('./utils/googleMapsConfig');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['greenviewsolutionsimages.s3.us-west-1.amazonaws.com', 'unsplash.com', 'ik.imagekit.io', 'imagedelivery.net', 'placehold.co', 'images.unsplash.com'],
  },
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: GOOGLE_MAPS_API_KEY,
    NEXT_PUBLIC_GOOGLE_MAP_ID: process.env.GOOGLE_MAP_ID, // Add this line
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `script-src 'self' 'unsafe-eval' https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com`,
          },
        ],
      },
    ];
  },
};
