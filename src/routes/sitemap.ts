import type { RequestHandler } from '@builder.io/qwik-city';
import { SITE_URL } from '../lib/seo/constants';

/**
 * XML sitemap — uses the canonical production URL (heritagestonebridge.com),
 * not the Vercel preview hostname. Add new routes here as they ship.
 */
const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/homes', priority: '0.9', changefreq: 'weekly' },
  { path: '/community', priority: '0.9', changefreq: 'weekly' },
  { path: '/market-report', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
];

export const onGet: RequestHandler = async ({ send }) => {
  const lastmod = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

  send(
    new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    }),
  );
};
