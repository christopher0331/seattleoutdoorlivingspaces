// next.config.js

const { GOOGLE_MAPS_API_KEY } = require('./utils/googleMapsConfig');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'greenviewsolutionsimages.s3.us-west-1.amazonaws.com',
      'source.unsplash.com',
      'ik.imagekit.io',
      'imagedelivery.net',
      'placehold.co',
      'images.unsplash.com',
      'localhost',
      'i.pravatar.cc',
      'maps.googleapis.com',
      'maps.gstatic.com',
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: GOOGLE_MAPS_API_KEY,
    NEXT_PUBLIC_GOOGLE_MAP_ID: process.env.GOOGLE_MAP_ID,
    NEXT_PUBLIC_ENABLE_CSP: process.env.NODE_ENV === 'production', // Enable CSP only in production
  },
};
