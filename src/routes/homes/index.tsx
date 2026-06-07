import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { StructuredData } from '../../components/StructuredData';
import { SITE_URL } from '../../lib/seo/constants';
import {
  breadcrumbSchema,
  realEstateListingSchema,
} from '../../lib/seo/schema';

/** Featured listings — replace with MLS feed when wired up. */
const FEATURED_LISTINGS = [
  {
    slug: '123-heritage-way',
    name: '123 Heritage Way',
    price: 525000,
    bedrooms: 4,
    bathrooms: 3,
    floorSize: 2450,
    streetAddress: '123 Heritage Way',
    description:
      'Four-bedroom, three-bathroom single-family home in Heritage at Stonebridge ' +
      'with 2,450 sq ft of living space.',
  },
  {
    slug: '456-stonebridge-dr',
    name: '456 Stonebridge Drive',
    price: 485000,
    bedrooms: 3,
    bathrooms: 2.5,
    floorSize: 2100,
    streetAddress: '456 Stonebridge Drive',
    description:
      'Three-bedroom, two-and-a-half-bathroom home in Heritage at Stonebridge ' +
      'with 2,100 sq ft of living space.',
  },
  {
    slug: '789-heritage-lane',
    name: '789 Heritage Lane',
    price: 675000,
    bedrooms: 5,
    bathrooms: 4,
    floorSize: 3200,
    streetAddress: '789 Heritage Lane',
    description:
      'Five-bedroom, four-bathroom luxury home in Heritage at Stonebridge with ' +
      '3,200 sq ft of living space.',
  },
];

export default component$(() => {
  const pageUrl = `${SITE_URL}/homes`;

  return (
    <div class="min-h-screen bg-heritage-light">
      {/* JSON-LD: BreadcrumbList + one RealEstateListing per featured property.
          Schema.org/RealEstateListing has no Google rich-result treatment in 2026,
          but signals entity structure for AI engines and Google entity graph. */}
      <StructuredData
        data={breadcrumbSchema([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Available Homes', url: pageUrl },
        ])}
      />
      {FEATURED_LISTINGS.map((listing) => (
        <StructuredData
          key={listing.slug}
          data={realEstateListingSchema({
            url: `${pageUrl}/${listing.slug}`,
            name: listing.name,
            description: listing.description,
            price: listing.price,
            bedrooms: listing.bedrooms,
            bathrooms: listing.bathrooms,
            floorSize: listing.floorSize,
            streetAddress: listing.streetAddress,
          })}
        />
      ))}
      <div class="hero-section">
        <div class="container-max text-center">
          <h1 class="text-4xl font-bold mb-4">Heritage at Stonebridge Homes for Sale</h1>
          <p class="text-xl max-w-3xl mx-auto" data-speakable>
            Current Heritage at Stonebridge listings in Summerlin West, Las Vegas. Prices
            range from the mid $400,000s for resale two-bedroom plans up to $1.2 million+
            for premium golf-course-view properties. All listings sourced from GLVAR MLS.
          </p>
        </div>
      </div>

      <section class="section-padding">
        <div class="container-max">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Card 1 */}
            <div class="heritage-card">
              <div class="h-48 bg-heritage-neutral flex items-center justify-center text-4xl">
                🏠
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">123 Heritage Way</h3>
                <div class="text-2xl font-bold text-heritage-primary mb-4">$525,000</div>
                <div class="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                  <div>
                    <div class="font-semibold">4</div>
                    <div>Bedrooms</div>
                  </div>
                  <div>
                    <div class="font-semibold">3</div>
                    <div>Bathrooms</div>
                  </div>
                  <div>
                    <div class="font-semibold">2,450</div>
                    <div>Sq Ft</div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-green-600 font-semibold">Available</span>
                  <a href="/homes/123-heritage-way" class="text-heritage-primary hover:text-heritage-secondary font-semibold">
                    View Details →
                  </a>
                </div>
              </div>
            </div>

            {/* Property Card 2 */}
            <div class="heritage-card">
              <div class="h-48 bg-heritage-neutral flex items-center justify-center text-4xl">
                🏠
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">456 Stonebridge Dr</h3>
                <div class="text-2xl font-bold text-heritage-primary mb-4">$485,000</div>
                <div class="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                  <div>
                    <div class="font-semibold">3</div>
                    <div>Bedrooms</div>
                  </div>
                  <div>
                    <div class="font-semibold">2.5</div>
                    <div>Bathrooms</div>
                  </div>
                  <div>
                    <div class="font-semibold">2,100</div>
                    <div>Sq Ft</div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-green-600 font-semibold">Available</span>
                  <a href="/homes/456-stonebridge-dr" class="text-heritage-primary hover:text-heritage-secondary font-semibold">
                    View Details →
                  </a>
                </div>
              </div>
            </div>

            {/* Property Card 3 */}
            <div class="heritage-card">
              <div class="h-48 bg-heritage-neutral flex items-center justify-center text-4xl">
                🏠
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">789 Heritage Lane</h3>
                <div class="text-2xl font-bold text-heritage-primary mb-4">$675,000</div>
                <div class="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                  <div>
                    <div class="font-semibold">5</div>
                    <div>Bedrooms</div>
                  </div>
                  <div>
                    <div class="font-semibold">4</div>
                    <div>Bathrooms</div>
                  </div>
                  <div>
                    <div class="font-semibold">3,200</div>
                    <div>Sq Ft</div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-green-600 font-semibold">Available</span>
                  <a href="/homes/789-heritage-lane" class="text-heritage-primary hover:text-heritage-secondary font-semibold">
                    View Details →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title:
    'Heritage at Stonebridge Homes for Sale — Summerlin Luxury Listings | Dr. Jan Duffy',
  meta: [
    {
      name: 'description',
      content:
        'Current Heritage at Stonebridge homes for sale in Summerlin West, Las Vegas. Prices ' +
        'from mid $400K to $1.2M+. Sourced from GLVAR MLS. Dr. Jan Duffy, REALTOR®, (702) 222-1964.',
    },
  ],
};