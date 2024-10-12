/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.motormentorhub.com.ng', 
    generateRobotsTxt: true,
    sitemapSize: 5000,  
    changefreq: 'daily', 
    priority: 0.7,  
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
    },
};
