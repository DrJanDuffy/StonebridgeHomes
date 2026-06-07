/**
 * Schema.org JSON-LD builders — 2026 best-practice patterns.
 *
 * Design notes:
 * - Every entity has an `@id` so we can reference (not duplicate) across pages.
 *   This is the single highest-leverage move for Google entity understanding
 *   in 2026.
 * - `RealEstateAgent` is a subtype of `LocalBusiness`; we include `hasCredential`
 *   linking to the NV Real Estate Division for E-E-A-T.
 * - `FAQPage` SERP rich snippets were deprecated by Google on 2026-05-07, BUT
 *   FAQPage JSON-LD still correlates with 3.2× AI Overview inclusion (Vizup,
 *   2026) — likely as a proxy for well-structured content. Keep it.
 * - AI engines (ChatGPT, Claude, Perplexity, Gemini) parse VISIBLE HTML during
 *   retrieval, not hidden JSON-LD (SearchVIU, Feb 2026). So pair every schema
 *   block with the equivalent content visible on the page.
 */

import { AGENT, COMMUNITY, SITE_URL } from './constants';

// ─────────────────────────────────────────────────────────────────────────────
// RealEstateAgent — sitewide, identical @id on every page

export function realEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': AGENT.id,
    name: AGENT.name,
    image: AGENT.image,
    telephone: AGENT.phoneE164,
    email: AGENT.email,
    url: SITE_URL,
    priceRange: '$$$',
    jobTitle: AGENT.jobTitle,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMMUNITY.street,
      addressLocality: COMMUNITY.city,
      addressRegion: COMMUNITY.region,
      postalCode: COMMUNITY.postalCode,
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Las Vegas' },
      { '@type': 'City', name: 'Henderson' },
      { '@type': 'Place', name: 'Summerlin' },
      { '@type': 'Place', name: 'Heritage at Stonebridge' },
    ],
    worksFor: {
      '@type': 'Organization',
      name: AGENT.brokerage,
      url: AGENT.brokerageUrl,
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      identifier: AGENT.licenseNumber,
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Nevada Real Estate Division',
        url: AGENT.licenseRegistry,
      },
    },
    knowsAbout: [
      'Heritage at Stonebridge',
      'Summerlin Real Estate',
      'Las Vegas Luxury Homes',
      '55+ Active Adult Communities',
      'Gated Community Homes',
      'New Construction Las Vegas',
    ],
    sameAs: [...AGENT.sameAs],
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Place — Heritage at Stonebridge community page

export function heritagePlaceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${SITE_URL}/#community`,
    name: COMMUNITY.name,
    description: COMMUNITY.description,
    url: `${SITE_URL}/community`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMMUNITY.lat,
      longitude: COMMUNITY.lng,
    },
    containedInPlace: {
      '@type': 'Place',
      name: 'Summerlin',
      containedInPlace: {
        '@type': 'City',
        name: 'Las Vegas',
        containedInPlace: { '@type': 'State', name: 'Nevada' },
      },
    },
    hasMap: 'https://www.google.com/maps/place/Heritage+at+Stonebridge,+Las+Vegas,+NV',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'totalHomes', value: '847' },
      { '@type': 'PropertyValue', name: 'communityType', value: 'Gated 55+ Active Adult' },
      { '@type': 'PropertyValue', name: 'priceRange', value: '$450,000 - $1,200,000' },
    ],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Resort-Style Pool & Spa', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Fitness Center', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Tennis Courts', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Pickleball Courts', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Gated Security 24/7', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Walking Trails', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Community Clubhouse', value: true },
    ],
    subjectOf: { '@id': AGENT.id },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQPage — AEO power tool. Pair with VISIBLE Q&A on the page.

export interface FaqItem {
  question: string;
  /** 40-60 word direct answer — the "AI snippet test" */
  answer: string;
}

export function faqPageSchema(faqs: FaqItem[], pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// BreadcrumbList — still gets rich results in 2026

export interface Breadcrumb {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: Breadcrumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: b.url,
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Article — market reports / blog posts (links author to Agent @id)

export interface ArticleMeta {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string; // ISO 8601
  dateModified: string;
}

export function articleSchema(meta: ArticleMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.headline,
    description: meta.description,
    image: meta.image,
    datePublished: meta.datePublished,
    dateModified: meta.dateModified,
    author: { '@id': AGENT.id },
    publisher: {
      '@type': 'Organization',
      name: AGENT.brokerage,
      url: AGENT.brokerageUrl,
    },
    mainEntityOfPage: meta.url,
    isAccessibleForFree: true,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// RealEstateListing — individual property pages

export interface PropertyMeta {
  url: string;
  name: string;
  description: string;
  image?: string;
  price: number;
  priceCurrency?: string;
  bedrooms: number;
  bathrooms: number;
  floorSize: number; // sq ft
  yearBuilt?: number;
  streetAddress: string;
}

export function realEstateListingSchema(p: PropertyMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    url: p.url,
    name: p.name,
    description: p.description,
    image: p.image,
    datePosted: new Date().toISOString().split('T')[0],
    offers: {
      '@type': 'Offer',
      price: p.price,
      priceCurrency: p.priceCurrency ?? 'USD',
      availability: 'https://schema.org/InStock',
      seller: { '@id': AGENT.id },
    },
    about: {
      '@type': 'SingleFamilyResidence',
      name: p.name,
      numberOfBedrooms: p.bedrooms,
      numberOfBathroomsTotal: p.bathrooms,
      floorSize: {
        '@type': 'QuantitativeValue',
        value: p.floorSize,
        unitCode: 'FTK', // square feet
      },
      yearBuilt: p.yearBuilt,
      address: {
        '@type': 'PostalAddress',
        streetAddress: p.streetAddress,
        addressLocality: COMMUNITY.city,
        addressRegion: COMMUNITY.region,
        postalCode: COMMUNITY.postalCode,
        addressCountry: 'US',
      },
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Speakable — voice/AI answer signals (Google: experimental; still useful for AEO)

export function speakableSchema(cssSelectors: string[]) {
  return {
    '@type': 'SpeakableSpecification',
    cssSelector: cssSelectors,
  };
}
