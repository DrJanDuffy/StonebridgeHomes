const fs = require('fs-extra');
const path = require('path');

console.log('🔧 Enhanced sitemap hook file loaded');

module.exports = [
  {
    hook: 'buildComplete',
    name: 'generateEnhancedSitemap',
    description: 'Generate comprehensive XML sitemap with SEO optimization',
    run: async ({ routes, settings }) => {
      console.log('🗺️ Enhanced sitemap hook running...');
      console.log('Routes:', routes.length);
      console.log('Settings distDir:', settings.distDir);

      // Enhanced sitemap with proper priorities and change frequencies
      const sitemapUrls = routes.map(route => {
        const url = route.route;
        let priority = '0.8';
        let changefreq = 'monthly';

        // Set priorities based on page importance
        if (url === '/') {
          priority = '1.0';
          changefreq = 'weekly';
        } else if (url.includes('/homes') || url.includes('/sold')) {
          priority = '0.9';
          changefreq = 'daily';
        } else if (url.includes('/contact') || url.includes('/community')) {
          priority = '0.9';
          changefreq = 'weekly';
        } else if (url.includes('/about') || url.includes('/neighborhood')) {
          priority = '0.8';
          changefreq = 'monthly';
        } else if (url.includes('/market-report')) {
          priority = '0.7';
          changefreq = 'weekly';
        }

        return `  <url>
    <loc>https://heritagestonebridge.com${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
      }).join('\n');

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapUrls}
</urlset>`;

      await fs.writeFile(path.join(settings.distDir, 'sitemap.xml'), sitemap);
      console.log('✅ Enhanced sitemap generated successfully!');

      // Enhanced robots.txt with comprehensive directives
      const robots = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /_elderjs/

# Sitemap
Sitemap: https://heritagestonebridge.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Specific bot directives
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: facebookexternalhit
Allow: /

# Block problematic bots
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /`;

      await fs.writeFile(path.join(settings.distDir, 'robots.txt'), robots);
      console.log('✅ Enhanced robots.txt generated successfully!');

      // Generate sitemap index for better organization
      const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://heritagestonebridge.com/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
</sitemapindex>`;

      await fs.writeFile(path.join(settings.distDir, 'sitemap-index.xml'), sitemapIndex);
      console.log('✅ Sitemap index generated successfully!');

      // Generate humans.txt for transparency
      const humans = `/* TEAM */
Developer: Dr. Jan Duffy
Contact: jan.duffy@heritagestonebridge.com
Location: Summerlin, Las Vegas, NV

/* THANKS */
Built with Elder.js - https://elderguide.com/tech/elderjs/
Styled with Tailwind CSS - https://tailwindcss.com/

/* SITE */
Last update: ${new Date().toISOString().split('T')[0]}
Language: English
Doctype: HTML5
IDE: VS Code`;

      await fs.writeFile(path.join(settings.distDir, 'humans.txt'), humans);
      console.log('✅ Humans.txt generated successfully!');

      // Generate security.txt
      const security = `Contact: mailto:jan.duffy@heritagestonebridge.com
Contact: tel:+17022221964
Expires: 2025-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: https://heritagestonebridge.com/.well-known/security.txt
Policy: https://heritagestonebridge.com/security-policy`;

      await fs.ensureDir(path.join(settings.distDir, '.well-known'));
      await fs.writeFile(path.join(settings.distDir, '.well-known', 'security.txt'), security);
      console.log('✅ Security.txt generated successfully!');

      console.log('🎉 All enhanced SEO files generated successfully!');
      console.log('📍 Files created:');
      console.log('   - sitemap.xml (main sitemap)');
      console.log('   - sitemap-index.xml (sitemap index)');
      console.log('   - robots.txt (enhanced crawler directives)');
      console.log('   - humans.txt (transparency file)');
      console.log('   - .well-known/security.txt (security contact)');
    }
  }
];
