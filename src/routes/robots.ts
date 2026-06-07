import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({ text }) => {
  const robots = `# robots.txt — Heritage at Stonebridge (Dr. Jan Duffy)

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Crawl-delay: 1

# --- Traditional search crawlers ---
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# --- Social preview crawlers ---
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# --- AI answer-engine / citation crawlers (AEO + GEO) ---
# These drive AI Overview, ChatGPT, Perplexity & Claude citations. Allow them.
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: cohere-ai
Allow: /

# --- Block aggressive SEO scrapers ---
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

# Sitemap
Sitemap: https://heritagestonebridge.com/sitemap.xml
`;

  text(200, robots);
};
