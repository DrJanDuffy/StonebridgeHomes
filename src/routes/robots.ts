import type { RequestHandler } from '@builder.io/qwik-city';
import { SITE_URL } from '../lib/seo/constants';

/**
 * robots.txt
 *
 * 2026 policy: ALLOW major AI crawlers explicitly so the site is eligible for
 * citations in ChatGPT / Claude / Perplexity / Google AI Overviews / Bing Copilot.
 * AI Overviews respect Google-Extended; ChatGPT respects GPTBot + OAI-SearchBot;
 * Anthropic respects ClaudeBot + claude-web + anthropic-ai; Perplexity uses
 * PerplexityBot + Perplexity-User; Apple uses Applebot-Extended.
 *
 * SEO-spam scrapers (Ahrefs / Semrush / MJ12 / DotBot) remain blocked to save
 * crawl budget and reduce competitive intel leakage.
 */
export const onGet: RequestHandler = async ({ send }) => {
  const robots = `User-agent: *
Allow: /

# Sensitive paths
Disallow: /admin/
Disallow: /api/
Disallow: /private/

Sitemap: ${SITE_URL}/sitemap.xml

# Search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: YandexBot
Allow: /

# AI training + AI search engines — explicitly allowed for citation eligibility
# (Google AI Overviews, ChatGPT, Claude, Perplexity, Bing Copilot, Apple Intelligence)
User-agent: Google-Extended
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: claude-web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: Bytespider
Allow: /

# Social media unfurl bots
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: Pinterestbot
Allow: /

# SEO-intel scrapers blocked — saves crawl budget, prevents competitive intel leakage
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: rogerbot
Disallow: /
`;

  send(
    new Response(robots, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    }),
  );
};
