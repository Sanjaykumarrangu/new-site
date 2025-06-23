/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.vortexpowerline.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin'], // Optional: exclude private routes
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
