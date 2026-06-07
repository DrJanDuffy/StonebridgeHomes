import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { StructuredData } from '../../components/StructuredData';
import { SITE_URL } from '../../lib/seo/constants';
import {
  type FaqItem,
  breadcrumbSchema,
  faqPageSchema,
  heritagePlaceSchema,
} from '../../lib/seo/schema';

const COMMUNITY_FAQS: FaqItem[] = [
  {
    question: 'Is Heritage at Stonebridge a 55+ community?',
    answer:
      'Yes. Heritage at Stonebridge is a deed-restricted 55+ active-adult community in ' +
      'Summerlin West. At least one resident in each home must be age 55 or older, and no ' +
      'permanent resident may be under 19, per the community CC&Rs and federal Housing for ' +
      'Older Persons Act (HOPA) compliance.',
  },
  {
    question: 'What are the HOA fees at Heritage at Stonebridge?',
    answer:
      'HOA fees at Heritage at Stonebridge typically cover gated security, common-area ' +
      'landscaping, clubhouse access, pool maintenance, and tennis/pickleball court upkeep. ' +
      'Current monthly assessments vary by floor plan and lot type. Contact Dr. Jan Duffy ' +
      'at (702) 222-1964 for current HOA fee details.',
  },
  {
    question: 'How far is Heritage at Stonebridge from the Las Vegas Strip?',
    answer:
      'Heritage at Stonebridge is approximately 15–20 minutes from the Las Vegas Strip via ' +
      'the 215 Beltway, depending on traffic. The community is also 20 minutes from Harry ' +
      'Reid International Airport, 5 minutes from Downtown Summerlin shopping, and minutes ' +
      'from Red Rock Canyon National Conservation Area.',
  },
  {
    question: 'What schools serve Heritage at Stonebridge?',
    answer:
      'Heritage at Stonebridge is zoned to Clark County School District schools, including ' +
      'highly rated Summerlin-area campuses. While the community itself is 55+, residents ' +
      'with visiting grandchildren or multi-generational situations may reference CCSD ' +
      'zoning at ccsd.net for the most current school assignments.',
  },
];

export default component$(() => {
  const pageUrl = `${SITE_URL}/community`;

  return (
    <div class="min-h-screen bg-heritage-light">
      <StructuredData data={heritagePlaceSchema()} />
      <StructuredData data={faqPageSchema(COMMUNITY_FAQS, pageUrl)} />
      <StructuredData
        data={breadcrumbSchema([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Community', url: pageUrl },
        ])}
      />
      <div class="hero-section">
        <div class="container-max text-center">
          <h1 class="text-4xl font-bold mb-4">Heritage at Stonebridge Community</h1>
          <p class="text-xl max-w-3xl mx-auto" data-speakable>
            Heritage at Stonebridge is a gated 55+ active-adult community of 847 single-family
            luxury homes in Summerlin West, Las Vegas, Nevada. Residents enjoy resort-style
            amenities, 24/7 gated security, and proximity to Red Rock Canyon, Downtown
            Summerlin, and the Las Vegas Strip.
          </p>
        </div>
      </div>

      <section class="section-padding">
        <div class="container-max">
          {/* Community Overview */}
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-12 text-heritage-primary">
              Community Overview
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p class="text-lg mb-6">
                  Heritage at Stonebridge is a premier gated community offering luxury homes with stunning mountain and valley views. Located in the heart of Summerlin, this exclusive neighborhood provides residents with an unparalleled lifestyle experience.
                </p>
                <div class="space-y-4">
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">✓</span>
                    <span>847 luxury homes</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">✓</span>
                    <span>Gated community with 24/7 security</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">✓</span>
                    <span>Resort-style amenities</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">✓</span>
                    <span>A-rated schools nearby</span>
                  </div>
                </div>
              </div>
              <div class="bg-heritage-neutral h-64 flex items-center justify-center text-6xl rounded-lg">
                🏘️
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-12 text-heritage-primary">
              Resort-Style Amenities
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: '🏊‍♀️', title: 'Resort-Style Pool & Spa', description: 'Luxurious pool area with spa, perfect for relaxation and entertaining' },
                { icon: '⛳', title: 'Championship Golf Course', description: 'Access to world-class golf courses designed by renowned architects' },
                { icon: '💪', title: 'Fitness Center', description: 'State-of-the-art fitness facilities with personal training available' },
                { icon: '🎾', title: 'Tennis Courts', description: 'Professional tennis courts for residents and guests' },
                { icon: '🔒', title: 'Gated Security', description: '24/7 security with controlled access for peace of mind' },
                { icon: '🚶‍♀️', title: 'Walking Trails', description: 'Scenic walking trails throughout the community' },
                { icon: '🌳', title: 'Parks & Recreation', description: 'Beautiful parks and recreational areas for families' },
                { icon: '🏛️', title: 'Community Clubhouse', description: 'Elegant clubhouse for events and community gatherings' }
              ].map((amenity, index) => (
                <div key={index} class="heritage-card p-6 text-center">
                  <div class="text-4xl mb-4">{amenity.icon}</div>
                  <h3 class="text-xl font-semibold mb-3">{amenity.title}</h3>
                  <p class="text-gray-600">{amenity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Schools */}
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-12 text-heritage-primary">
              Location & Schools
            </h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div class="heritage-card p-6">
                <h3 class="text-2xl font-semibold mb-4">Prime Location</h3>
                <div class="space-y-3">
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">📍</span>
                    <span>Located in Summerlin, Las Vegas</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">🛍️</span>
                    <span>Minutes from shopping and dining</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">🏥</span>
                    <span>Close to medical facilities</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">✈️</span>
                    <span>Easy access to McCarran Airport</span>
                  </div>
                </div>
              </div>

              <div class="heritage-card p-6">
                <h3 class="text-2xl font-semibold mb-4">Excellent Schools</h3>
                <div class="space-y-3">
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">🏫</span>
                    <span>Clark County School District</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">⭐</span>
                    <span>A-rated elementary and high schools</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">🎓</span>
                    <span>Private school options nearby</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-heritage-primary mr-3">📚</span>
                    <span>UNLV and other universities close</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community Stats — with named sources for GEO citation */}
          <div class="bg-white py-16 rounded-lg">
            <h2 class="text-3xl font-bold text-center mb-4 text-heritage-primary">
              Community Statistics
            </h2>
            <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Sources: Heritage at Stonebridge HOA records, GLVAR MLS, Summerlin master-plan
              documentation.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div class="text-center">
                <div class="text-4xl font-bold text-heritage-primary mb-2">847</div>
                <div class="text-lg text-gray-600">Total Homes</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-heritage-primary mb-2">55+</div>
                <div class="text-lg text-gray-600">Active-Adult Community</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-heritage-primary mb-2">2015-2020</div>
                <div class="text-lg text-gray-600">Year Built</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-heritage-primary mb-2">$450K+</div>
                <div class="text-lg text-gray-600">Starting Price</div>
              </div>
            </div>
          </div>

          {/* AEO FAQ section — visible HTML mirrors FAQPage JSON-LD */}
          <div class="py-16" id="faq">
            <h2 class="text-3xl font-bold text-center mb-12 text-heritage-primary">
              Frequently Asked Questions
            </h2>
            <div class="space-y-6 max-w-4xl mx-auto">
              {COMMUNITY_FAQS.map((faq) => (
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
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Heritage at Stonebridge Community — Summerlin 55+ Active-Adult Living',
  meta: [
    {
      name: 'description',
      content:
        'Heritage at Stonebridge: 847-home gated 55+ community in Summerlin West, Las Vegas. ' +
        'Resort-style amenities, 24/7 security, minutes from Red Rock Canyon. HOA, fees, ' +
        'schools, and location FAQs.',
    },
  ],
};