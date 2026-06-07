import type { RequestHandler } from '@builder.io/qwik-city';

const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/homes', priority: '0.9', changefreq: 'weekly' },
  { path: '/community', priority: '0.9', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/market-report', priority: '0.7', changefreq: 'monthly' },
];

export const onGet: RequestHandler = async ({ send, headers }) => {
  const baseUrl = 'https://heritagestonebridge.com';
  const lastmod = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  headers.set('Content-Type', 'application/xml; charset=utf-8');
  headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400');
  send(200, sitemap);
};
