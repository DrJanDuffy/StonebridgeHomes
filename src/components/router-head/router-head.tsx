import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';
import { SITE_URL } from '../../lib/seo/constants';
import { realEstateAgentSchema } from '../../lib/seo/schema';

/**
 * Per-route head: canonical URLs, Open Graph, Twitter, sitewide JSON-LD.
 *
 * 2026 baseline:
 * - Canonical URL on every page (`<link rel="canonical">`) — entity consolidation.
 * - One `@id`-anchored RealEstateAgent JSON-LD sitewide so per-route Articles,
 *   Places, FAQs reference (not duplicate) the agent entity.
 * - Per-route title/description/script overrides via Qwik City's `useDocumentHead()`.
 * - No `keywords` meta — Google has ignored it since 2009 and it leaks targeting
 *   to competitors.
 * - `robots` meta unlocks max snippet length / large image previews for AIO.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  const canonical = `${SITE_URL}${loc.url.pathname}`;
  const defaultTitle =
    'Heritage at Stonebridge — Premier Summerlin Community | Las Vegas';
  const title = head.title || defaultTitle;
  const defaultDescription =
    'Luxury homes in Heritage at Stonebridge, a gated 55+ community in Summerlin, ' +
    'Las Vegas. Dr. Jan Duffy, REALTOR®, 30+ years local expertise. (702) 222-1964.';
  const description =
    head.meta.find((m) => m.name === 'description')?.content || defaultDescription;
  const ogImage = `${SITE_URL}/images/heritage-stonebridge-og.jpg`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Dr. Jan Duffy" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      {/* Canonical URL — entity consolidation signal */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Heritage at Stonebridge" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@DrJanDuffy" />

      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* Preconnects */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* Per-route extra <link> and <meta> from DocumentHead */}
      {head.links.map((l) => (
        <link key={l.key || l.href} {...l} />
      ))}
      {head.meta.map((m) => (
        <meta key={m.key || m.name || m.property} {...m} />
      ))}

      {/* Sitewide RealEstateAgent JSON-LD — @id-anchored for entity consolidation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify(realEstateAgentSchema())}
      />

      {/* Per-route extra scripts (e.g. FAQPage, Place, Article JSON-LD) */}
      {head.scripts?.map((s) => (
        <script
          key={s.key}
          {...s.props}
          dangerouslySetInnerHTML={s.script || s.props?.dangerouslySetInnerHTML}
        />
      ))}
    </>
  );
});
