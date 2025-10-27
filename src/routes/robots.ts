import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({ html }) => {
  const robots = `User-agent: *
Allow: /

# Disallow admin and API routes
Disallow: /admin/
Disallow: /api/
Disallow: /private/

# Sitemap
Sitemap: https://stonebridge-homes.vercel.app/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Specific bot directives
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 1

# Social media crawlers
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Block aggressive crawlers
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /`;

  html(200, robots);
};

