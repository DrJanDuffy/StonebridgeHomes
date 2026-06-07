/**
 * SEO / GEO / AEO constants for Heritage at Stonebridge.
 *
 * Canonical NAP (Name, Address, Phone) — used EVERYWHERE, byte-for-byte identical
 * across the site, GBP, BHHS profile, NV license registry. Entity consolidation
 * is a 2026 AI-Overview ranking signal.
 */

export const SITE_URL = 'https://heritagestonebridge.com';
export const SITE_NAME = 'Heritage at Stonebridge';

export const AGENT = {
  name: 'Dr. Jan Duffy',
  /** Canonical @id used in JSON-LD across every domain for entity consolidation */
  id: `${SITE_URL}/#agent`,
  phoneE164: '+17022221964',
  phoneDisplay: '(702) 222-1964',
  email: 'jan.duffy@heritagestonebridge.com',
  licenseNumber: 'S.0197614.LLC',
  licenseRegistry: 'https://red.nv.gov/Licensee_Search/',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  brokerageUrl: 'https://www.bhhsnv.com',
  jobTitle: 'REALTOR®',
  image: `${SITE_URL}/images/jan-duffy-headshot.jpg`,
  sameAs: [
    'https://www.bhhsnv.com/agent/jan-duffy',
    'https://www.linkedin.com/in/dr-jan-duffy',
    'https://www.facebook.com/heritagestonebridge',
    'https://twitter.com/DrJanDuffy',
    'https://red.nv.gov/Licensee_Search/',
  ],
} as const;

/** Heritage at Stonebridge community in Summerlin, NV — approximate centroid */
export const COMMUNITY = {
  name: 'Heritage at Stonebridge',
  description:
    'Gated 55+ active-adult community in Summerlin West, Las Vegas, Nevada. ' +
    'Resort-style amenities including pool, fitness center, tennis courts, ' +
    'and pickleball. Single-family homes from the high $400s to $1M+.',
  lat: 36.182,
  lng: -115.349,
  city: 'Las Vegas',
  region: 'NV',
  postalCode: '89138',
  street: 'Heritage at Stonebridge',
} as const;
