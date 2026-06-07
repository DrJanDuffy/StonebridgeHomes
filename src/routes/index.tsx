import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { StructuredData } from '../components/StructuredData';
import { AGENT, SITE_URL } from '../lib/seo/constants';
import {
  type FaqItem,
  breadcrumbSchema,
  faqPageSchema,
  heritagePlaceSchema,
} from '../lib/seo/schema';

/**
 * Homepage — AEO-optimized.
 *
 * Content pattern (per 2026 SEO/GEO/AEO research):
 * - Question-format H2s
 * - 40-60 word direct-answer paragraph immediately after each H2 (the "AI
 *   snippet test")
 * - Statement-source-statement structure (numbers attributed to GLVAR MLS
 *   and Heritage at Stonebridge HOA records)
 * - Self-contained sections — each answer makes sense without reading the rest
 * - Visible HTML mirrors FAQPage JSON-LD (AI engines parse visible content,
 *   not hidden schema; SearchVIU Feb 2026)
 */

const FAQS: FaqItem[] = [
  {
    question: 'What is Heritage at Stonebridge?',
    answer:
      'Heritage at Stonebridge is a gated 55+ active-adult community in Summerlin West, ' +
      'Las Vegas, Nevada. The community features 847 single-family homes, resort-style ' +
      'amenities, and 24/7 guard-gated security. Homes range from approximately $450,000 ' +
      'to over $1.2 million as of 2026.',
  },
  {
    question: 'Where is Heritage at Stonebridge located?',
    answer:
      'Heritage at Stonebridge sits in Summerlin West, Las Vegas, NV 89138 — minutes from ' +
      'Red Rock Canyon, Downtown Summerlin shopping, and major medical facilities. The ' +
      'community is approximately 20 minutes from Harry Reid International Airport and ' +
      '15 minutes from the Las Vegas Strip via the 215 Beltway.',
  },
  {
    question: 'What amenities does Heritage at Stonebridge offer?',
    answer:
      'Residents enjoy a resort-style pool and spa, fitness center, tennis and pickleball ' +
      'courts, walking trails, community clubhouse, and 24/7 gated security. The HOA also ' +
      'maintains landscaped common areas and hosts year-round social programming for ' +
      'active-adult residents.',
  },
  {
    question: 'What are home prices in Heritage at Stonebridge in 2026?',
    answer:
      'Heritage at Stonebridge homes currently range from the mid $400,000s for resale ' +
      'two-bedroom plans up to $1.2 million-plus for premium golf-course-view properties. ' +
      'Median price tracks Summerlin West averages reported by the Greater Las Vegas ' +
      'Association of REALTORS® (GLVAR) MLS.',
  },
  {
    question: 'Who is the local Heritage at Stonebridge real estate expert?',
    answer:
      'Dr. Jan Duffy, REALTOR® at Berkshire Hathaway HomeServices Nevada Properties, ' +
      'specializes in Heritage at Stonebridge and Summerlin 55+ communities. Licensed in ' +
      `Nevada (#${AGENT.licenseNumber}) with 30+ years of local experience. Direct line: ` +
      `${AGENT.phoneDisplay}.`,
  },
];

export default component$(() => {
  const pageUrl = `${SITE_URL}/`;

  return (
    <div class="min-h-screen bg-heritage-light">
      {/* JSON-LD: Place (community) + FAQ + Breadcrumb. Agent JSON-LD is sitewide via RouterHead. */}
      <StructuredData data={heritagePlaceSchema()} />
      <StructuredData data={faqPageSchema(FAQS, pageUrl)} />
      <StructuredData
        data={breadcrumbSchema([{ name: 'Home', url: pageUrl }])}
      />

      {/* Hero — 40-60 word definitive lede answers "what is this site about?" for AI engines */}
      <section class="hero-section text-center">
        <div class="container-max">
          <h1 class="text-5xl font-bold mb-4">
            Heritage at Stonebridge —{' '}
            <span class="text-heritage-light">Summerlin 55+ Luxury Homes</span>
          </h1>
          <p class="text-xl mb-8 max-w-3xl mx-auto" data-speakable>
            Heritage at Stonebridge is a gated 55+ active-adult community of 847 luxury homes
            in Summerlin West, Las Vegas, Nevada. Resort-style amenities, 24/7 security, and
            homes from the mid $400,000s to $1.2M+. Dr. Jan Duffy, REALTOR®, is your local
            Heritage at Stonebridge expert with 30+ years of Las Vegas real estate experience.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/homes" class="heritage-button">
              View Available Homes →
            </a>
            <a href={`tel:${AGENT.phoneE164}`} class="heritage-button-secondary">
              Call Dr. Jan: {AGENT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Quick links — same as before */}
      <main class="section-padding">
        <div class="container-max">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="heritage-card p-6 text-center">
              <div class="text-4xl mb-4">🏠</div>
              <h2 class="text-xl font-semibold mb-3">Available Properties</h2>
              <p class="text-gray-600 mb-4">
                Browse current Heritage at Stonebridge listings with price, beds, baths, and
                square footage.
              </p>
              <a href="/homes" class="heritage-button text-sm">
                View Listings →
              </a>
            </div>

            <div class="heritage-card p-6 text-center">
              <div class="text-4xl mb-4">🏊‍♀️</div>
              <h2 class="text-xl font-semibold mb-3">Community Features</h2>
              <p class="text-gray-600 mb-4">
                Pool, fitness center, tennis, pickleball, clubhouse — every amenity, mapped.
              </p>
              <a href="/community" class="heritage-button text-sm">
                Explore Amenities →
              </a>
            </div>

            <div class="heritage-card p-6 text-center">
              <div class="text-4xl mb-4">📊</div>
              <h2 class="text-xl font-semibold mb-3">Market Report</h2>
              <p class="text-gray-600 mb-4">
                Current median price, days-on-market, and inventory — sourced from GLVAR MLS.
              </p>
              <a href="/market-report" class="heritage-button text-sm">
                View Report →
              </a>
            </div>

            <div class="heritage-card p-6 text-center">
              <div class="text-4xl mb-4">📞</div>
              <h2 class="text-xl font-semibold mb-3">Contact Dr. Jan</h2>
              <p class="text-gray-600 mb-4">
                Schedule a private tour or request a market analysis.
              </p>
              <a href="/contact" class="heritage-button text-sm">
                Get In Touch →
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* AEO FAQ section — visible HTML mirrors FAQPage JSON-LD.
          Question-format H2s + 40-60 word answer ledes = "AI snippet test" pass. */}
      <section class="py-16 bg-white" id="faq">
        <div class="container-max max-w-4xl">
          <h2 class="text-3xl font-bold text-center mb-12 text-heritage-primary">
            Frequently Asked Questions About Heritage at Stonebridge
          </h2>
          <div class="space-y-8">
            {FAQS.map((faq) => (
              <article key={faq.question} class="heritage-card p-6">
                <h2 class="text-xl font-semibold mb-3 text-heritage-primary">
                  {faq.question}
                </h2>
                <p class="text-gray-700 leading-relaxed" data-speakable>
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Local expert section */}
      <section class="py-16 bg-heritage-primary text-white">
        <div class="container-max">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold mb-6">
                Who is the local Heritage at Stonebridge expert?
              </h2>
              <p class="text-lg mb-6 leading-relaxed">
                Dr. Jan Duffy is a Nevada-licensed REALTOR® at Berkshire Hathaway
                HomeServices Nevada Properties (NV license #{AGENT.licenseNumber}) with
                30+ years of Las Vegas real estate experience and over $127M in career
                sales. Heritage at Stonebridge and Summerlin 55+ communities are her
                specialty.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${AGENT.phoneE164}`}
                  class="bg-white text-heritage-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                >
                  📞 {AGENT.phoneDisplay}
                </a>
                <a
                  href={`mailto:${AGENT.email}`}
                  class="bg-heritage-secondary text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
                >
                  📧 Email Dr. Duffy
                </a>
              </div>
            </div>
            <div class="text-center">
              <div class="w-64 h-64 bg-heritage-secondary rounded-full mx-auto flex items-center justify-center text-6xl">
                👩‍💼
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section — sourced numbers (GEO pattern) */}
      <section class="py-16 bg-white">
        <div class="container-max">
          <h2 class="text-3xl font-bold text-center mb-4 text-heritage-primary">
            Heritage at Stonebridge by the Numbers
          </h2>
          <p class="text-center text-gray-600 mb-12">
            Sources: Heritage at Stonebridge HOA records, GLVAR MLS, Summerlin master-plan
            documentation.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-4xl font-bold text-heritage-primary mb-2">847</div>
              <div class="text-lg text-gray-600">Total Homes</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-heritage-primary mb-2">$450K+</div>
              <div class="text-lg text-gray-600">Starting Price (2026)</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-heritage-primary mb-2">55+</div>
              <div class="text-lg text-gray-600">Active-Adult Community</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-heritage-primary mb-2">24/7</div>
              <div class="text-lg text-gray-600">Gated Security</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title:
    'Heritage at Stonebridge — Summerlin 55+ Luxury Homes | Dr. Jan Duffy',
  meta: [
    {
      name: 'description',
      content:
        'Heritage at Stonebridge: gated 55+ community of 847 luxury homes in Summerlin West, Las Vegas. ' +
        'Resort amenities, 24/7 security, homes from $450K. Dr. Jan Duffy, REALTOR®, (702) 222-1964.',
    },
  ],
};
