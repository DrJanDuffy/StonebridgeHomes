import { component$ } from '@builder.io/qwik';
import { type DocumentHead, useLocation } from '@builder.io/qwik-city';

// Canonical production domain (used for canonical URL + entity @id graph)
const SITE = 'https://heritagestonebridge.com';

export const RouterHead = component$(() => {
  const loc = useLocation();
  // Build a clean canonical from the current path (strip trailing slashes)
  const path = loc.url.pathname.replace(/\/+$/, '');
  const canonical = `${SITE}${path === '' ? '/' : path}`;

  // Entity graph: connected nodes give AI/answer engines unambiguous
  // who/what/where signals (GEO) + rich-result eligibility (AEO/SEO).
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateAgent',
        '@id': `${SITE}/#agent`,
        name: 'Dr. Jan Duffy, REALTOR® — Heritage at Stonebridge',
        url: SITE,
        logo: `${SITE}/images/logo.png`,
        image: `${SITE}/images/heritage-stonebridge-og.jpg`,
        description:
          "Dr. Jan Duffy is a Nevada-licensed REALTOR® specializing in Heritage at Stonebridge, Summerlin's premier guard-gated luxury community in Las Vegas.",
        telephone: '+1-702-222-1964',
        email: 'jan.duffy@heritagestonebridge.com',
        priceRange: '$$$',
        currenciesAccepted: 'USD',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Heritage at Stonebridge',
          addressLocality: 'Summerlin',
          addressRegion: 'NV',
          postalCode: '89144',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 36.1897,
          longitude: -115.3422,
        },
        areaServed: [
          { '@type': 'City', name: 'Summerlin, NV' },
          { '@type': 'City', name: 'Las Vegas, NV' },
          { '@type': 'City', name: 'Henderson, NV' },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '08:00',
            closes: '20:00',
          },
        ],
        knowsAbout: [
          'Summerlin real estate',
          'Heritage at Stonebridge',
          'luxury homes',
          'guard-gated communities',
          'new construction homes',
          'Las Vegas relocation',
        ],
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Real Estate License',
          recognizedBy: {
            '@type': 'GovernmentOrganization',
            name: 'Nevada Real Estate Division',
          },
          identifier: 'S.0197614.LLC',
        },
        parentOrganization: {
          '@type': 'Organization',
          name: 'Berkshire Hathaway HomeServices Nevada Properties',
        },
        founder: { '@id': `${SITE}/#janduffy` },
        sameAs: [
          'https://www.facebook.com/heritagestonebridge',
          'https://www.linkedin.com/in/dr-jan-duffy',
          'https://twitter.com/DrJanDuffy',
        ],
      },
      {
        '@type': 'Person',
        '@id': `${SITE}/#janduffy`,
        name: 'Dr. Jan Duffy',
        jobTitle: 'REALTOR®',
        url: SITE,
        image: `${SITE}/images/heritage-stonebridge-og.jpg`,
        telephone: '+1-702-222-1964',
        worksFor: {
          '@type': 'Organization',
          name: 'Berkshire Hathaway HomeServices Nevada Properties',
        },
        areaServed: 'Las Vegas Valley, Nevada',
        knowsAbout: [
          'Summerlin luxury real estate',
          'Heritage at Stonebridge homes',
          '55+ and active-adult communities',
          'new construction',
          'Las Vegas relocation',
        ],
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Real Estate License',
          recognizedBy: {
            '@type': 'GovernmentOrganization',
            name: 'Nevada Real Estate Division',
          },
          identifier: 'S.0197614.LLC',
        },
        sameAs: ['https://www.linkedin.com/in/dr-jan-duffy', 'https://twitter.com/DrJanDuffy'],
      },
      {
        '@type': 'Place',
        '@id': `${SITE}/#community`,
        name: 'Heritage at Stonebridge',
        description:
          'A guard-gated luxury home community in Summerlin, Las Vegas, featuring custom and new-construction homes, resort-style amenities, and access to A-rated schools.',
        url: SITE,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 36.1897,
          longitude: -115.3422,
        },
        containedInPlace: {
          '@type': 'Place',
          name: 'Summerlin, Las Vegas, NV',
        },
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'Guard-gated entry', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Resort-style amenities', value: true },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Community parks & trails',
            value: true,
          },
          { '@type': 'LocationFeatureSpecification', name: 'A-rated schools nearby', value: true },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: SITE,
        name: 'Heritage at Stonebridge',
        inLanguage: 'en-US',
        publisher: { '@id': `${SITE}/#agent` },
      },
    ],
  };

  return (
    <>
      <title>Heritage at Stonebridge - Premier Summerlin Community | Las Vegas Real Estate</title>
      <meta
        name="description"
        content="Discover luxury living at Heritage at Stonebridge in Summerlin, Las Vegas. Custom homes, resort-style amenities, and A-rated schools. Your Dr. Jan Duffy, local expert."
      />
      <meta
        name="keywords"
        content="Heritage Stonebridge, Summerlin homes, Las Vegas real estate, luxury homes, Dr. Jan Duffy, gated community, custom homes, resort amenities, A-rated schools"
      />
      <meta name="author" content="Dr. Jan Duffy" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical + crawl directives (AEO: allow large snippets/images in AI answers) */}
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />

      {/* Local-SEO geo signals */}
      <meta name="geo.region" content="US-NV" />
      <meta name="geo.placename" content="Summerlin, Las Vegas, Nevada" />
      <meta name="geo.position" content="36.1897;-115.3422" />
      <meta name="ICBM" content="36.1897, -115.3422" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="Heritage at Stonebridge - Premier Summerlin Community" />
      <meta
        property="og:description"
        content="Luxury homes in exclusive Summerlin community with resort amenities"
      />
      <meta
        property="og:image"
        content="https://heritagestonebridge.com/images/heritage-stonebridge-og.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Heritage at Stonebridge luxury community in Summerlin, Las Vegas"
      />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Heritage at Stonebridge" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Heritage at Stonebridge - Premier Summerlin Community" />
      <meta
        name="twitter:description"
        content="Luxury homes in exclusive Summerlin community with resort amenities"
      />
      <meta
        name="twitter:image"
        content="https://heritagestonebridge.com/images/heritage-stonebridge-og.jpg"
      />
      <meta
        name="twitter:image:alt"
        content="Heritage at Stonebridge luxury community in Summerlin, Las Vegas"
      />
      <meta name="twitter:site" content="@DrJanDuffy" />
      <meta name="twitter:creator" content="@DrJanDuffy" />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* JSON-LD structured data (entity @graph) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={JSON.stringify(schemaGraph)} />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Heritage at Stonebridge - Premier Summerlin Community',
  meta: [
    {
      name: 'description',
      content:
        'Discover luxury living at Heritage at Stonebridge in Summerlin, Las Vegas. Custom homes, resort-style amenities, and A-rated schools.',
    },
  ],
};
