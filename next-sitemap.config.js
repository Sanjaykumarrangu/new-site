module.exports = {
  siteUrl: 'https://www.vortexpowerline.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [
      'https://www.vortexpowerline.com/sitemap.xml',
    ],
  },
};
