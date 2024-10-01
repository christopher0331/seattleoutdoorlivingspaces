module.exports = {
    siteUrl: 'https://greenviewsolutions.net',
    generateRobotsTxt: true, // (optional)
    sitemapSize: 7000, // for splitting into multiple files
    // Optional:
    robotsTxtOptions: {
      additionalSitemaps: [        
      ],
    },
    // Exclude specific paths:
    exclude: ['/admin/*', '/config/*'],
    // Define how dynamic routes are resolved into paths:
    transform: async (config, path) => {
      // Custom transformation logic...
      return {
        loc: path, // The path for the page
        changefreq: 'daily',
        priority: 0.7,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    },
  };