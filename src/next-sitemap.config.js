/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.motormentorhub.com.ng', 
    generateRobotsTxt: true,  // Generate robots.txt
    sitemapSize: 5000,  
    changefreq: 'daily', 
    priority: 0.7,  
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },  // Allow all pages to be crawled
        ],
    },
};
