<script>
  import SEO from '../../components/SEO.svelte';

  export let data;

  const { communityName, location, totalHomes, medianPrice, hero, community, featuredHomes, amenities, agent } = data;

  function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  }

  // Enhanced JSON-LD for real estate community
  const communityJsonLd = {
    "@type": "ResidentialComplex",
    "name": communityName,
    "description": `Premier luxury gated community in ${location} featuring custom homes, resort-style amenities, and A-rated schools.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Heritage at Stonebridge",
      "addressLocality": "Summerlin",
      "addressRegion": "NV",
      "postalCode": "89144",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1699",
      "longitude": "-115.1398"
    },
    "numberOfUnits": totalHomes,
    "amenityFeature": amenities.map(amenity => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity,
      "value": true
    })),
    "priceRange": "$800,000 - $2,500,000",
    "petsAllowed": true,
    "smokingAllowed": false
  };

  // Breadcrumbs for navigation
  const breadcrumbs = [
    { name: "Home", url: "https://heritagestonebridge.com/" }
  ];
</script>

<SEO
  title="Heritage at Stonebridge - Premier Summerlin Community | Las Vegas Real Estate"
  description="Discover luxury living at Heritage at Stonebridge in Summerlin, Las Vegas. Custom homes, resort-style amenities, and A-rated schools. Your Dr. Jan Duffy, local expert."
  canonical="https://heritagestonebridge.com"
  keywords={['Heritage Stonebridge', 'Summerlin homes', 'Las Vegas real estate', 'luxury homes', 'Dr. Jan Duffy', 'gated community', 'custom homes', 'resort amenities', 'A-rated schools', 'Summerlin Nevada', 'Heritage at Stonebridge homes for sale']}
  breadcrumbs={breadcrumbs}
  openGraph={{
    type: 'website',
    url: 'https://heritagestonebridge.com',
    title: 'Heritage at Stonebridge - Premier Summerlin Community',
    description: 'Luxury homes in exclusive Summerlin community with resort amenities',
    image: 'https://heritagestonebridge.com/images/community-hero.jpg'
  }}
  jsonLd={communityJsonLd}
/>

<!-- Hero Section with Enhanced Semantics -->
<section class="hero-section text-center" role="banner" itemscope itemtype="https://schema.org/ResidentialComplex">
  <div class="container-max px-4">
    <h1 itemprop="name" class="text-5xl font-bold mb-4">
      Welcome to {communityName}
    </h1>
    <p class="text-xl mb-6" itemprop="description">
      Premier luxury living in {location}
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a href="tel:{agent.phone}" class="heritage-button text-lg" aria-label="Call Dr. Jan Duffy for real estate inquiries">
        📞 Call Dr. Jan Duffy: {agent.phone}
      </a>
      <a href="/contact" class="heritage-button text-lg bg-heritage-secondary" aria-label="Contact Dr. Jan Duffy for more information">
        📧 Contact Us
      </a>
    </div>
  </div>
</section>

<!-- Community Statistics -->
<section class="py-16 bg-white" aria-labelledby="community-stats">
  <div class="container-max px-4">
    <h2 id="community-stats" class="text-3xl font-bold text-center mb-12 text-heritage-primary">
      Community Overview
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div class="text-center" itemscope itemtype="https://schema.org/QuantitativeValue">
        <div class="text-4xl font-bold text-heritage-primary mb-2" itemprop="value">{totalHomes}</div>
        <div class="text-lg text-gray-600" itemprop="name">Total Homes</div>
      </div>
      <div class="text-center" itemscope itemtype="https://schema.org/QuantitativeValue">
        <div class="text-4xl font-bold text-heritage-primary mb-2" itemprop="value">{formatPrice(medianPrice)}</div>
        <div class="text-lg text-gray-600" itemprop="name">Median Price</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-heritage-primary mb-2">2015-2020</div>
        <div class="text-lg text-gray-600">Year Built</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-heritage-primary mb-2">A+</div>
        <div class="text-lg text-gray-600">School Rating</div>
      </div>
    </div>
  </div>
</section>

<!-- Featured Homes -->
<section class="py-16 bg-heritage-light" aria-labelledby="featured-homes">
  <div class="container-max px-4">
    <h2 id="featured-homes" class="text-3xl font-bold text-center mb-12 text-heritage-primary">
      Featured Available Homes
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each featuredHomes as home}
        <article class="heritage-card overflow-hidden" itemscope itemtype="https://schema.org/RealEstateListing">
          <img
            src={home.image}
            alt="Luxury home at {home.address} in Heritage at Stonebridge"
            class="w-full h-48 object-cover"
            loading="lazy"
            itemprop="image"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2" itemprop="name">
              {home.address}
            </h3>
            <div class="text-2xl font-bold text-heritage-primary mb-4" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
              <span itemprop="price" content={home.price}>{formatPrice(home.price)}</span>
              <meta itemprop="priceCurrency" content="USD" />
              <meta itemprop="availability" content="https://schema.org/InStock" />
            </div>
            <div class="grid grid-cols-3 gap-4 text-center text-sm text-gray-600 mb-4">
              <div>
                <div class="font-semibold">{home.bedrooms}</div>
                <div>Bedrooms</div>
              </div>
              <div>
                <div class="font-semibold">{home.bathrooms}</div>
                <div>Bathrooms</div>
              </div>
              <div>
                <div class="font-semibold">{home.squareFeet.toLocaleString()}</div>
                <div>Sq Ft</div>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-green-600 font-semibold" itemprop="itemCondition">
                {home.status}
              </span>
              <a href="/homes/{home.id}" class="text-heritage-primary hover:text-heritage-secondary font-semibold">
                View Details →
              </a>
            </div>
          </div>
        </article>
      {/each}
    </div>
    <div class="text-center mt-8">
      <a href="/homes" class="heritage-button text-lg">
        View All Available Homes
      </a>
    </div>
  </div>
</section>

<!-- Community Amenities -->
<section class="py-16 bg-white" aria-labelledby="amenities">
  <div class="container-max px-4">
    <h2 id="amenities" class="text-3xl font-bold text-center mb-12 text-heritage-primary">
      Resort-Style Amenities
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each amenities as amenity, index}
        <div class="heritage-card p-6 text-center" itemscope itemtype="https://schema.org/LocationFeatureSpecification">
          <div class="text-4xl mb-4">
            {#if amenity.includes('pool')}🏊‍♀️
            {:else if amenity.includes('golf')}⛳
            {:else if amenity.includes('fitness')}💪
            {:else if amenity.includes('tennis')}🎾
            {:else if amenity.includes('security')}🔒
            {:else if amenity.includes('trail')}🚶‍♀️
            {:else}🏠{/if}
          </div>
          <h3 class="font-semibold text-lg mb-2" itemprop="name">{amenity}</h3>
          <meta itemprop="value" content="true" />
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Agent Information -->
<section class="py-16 bg-heritage-primary text-white" aria-labelledby="agent-info">
  <div class="container-max px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 id="agent-info" class="text-3xl font-bold mb-6">
          Meet Your Local Expert
        </h2>
        <div class="text-lg mb-6" itemscope itemtype="https://schema.org/RealEstateAgent">
          <h3 class="text-2xl font-semibold mb-4" itemprop="name">{agent.name}</h3>
          <p class="mb-4" itemprop="jobTitle">{agent.title}</p>
          <p class="mb-6">
            With extensive experience in the Summerlin real estate market, Dr. Jan Duffy specializes in luxury homes and provides personalized service to help you find your dream home in Heritage at Stonebridge.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="tel:{agent.phone}" class="bg-white text-heritage-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              📞 {agent.phone}
            </a>
            <a href="mailto:{agent.email}" class="bg-heritage-secondary text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
              📧 Email Dr. Duffy
            </a>
          </div>
        </div>
      </div>
      <div class="text-center">
        <img
          src={agent.image}
          alt="Dr. Jan Duffy, Real Estate Professional specializing in Heritage at Stonebridge"
          class="w-64 h-64 object-cover rounded-full mx-auto border-4 border-white"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section for AI Crawlers -->
<section class="py-16 bg-heritage-light" aria-labelledby="faq">
  <div class="container-max px-4">
    <h2 id="faq" class="text-3xl font-bold text-center mb-12 text-heritage-primary">
      Frequently Asked Questions
    </h2>
    <div class="max-w-4xl mx-auto" itemscope itemtype="https://schema.org/FAQPage">
      <div class="space-y-6">
        <div itemscope itemtype="https://schema.org/Question" class="heritage-card p-6">
          <h3 itemprop="name" class="text-xl font-semibold mb-3">What makes Heritage at Stonebridge special?</h3>
          <div itemscope itemtype="https://schema.org/Answer">
            <p itemprop="text">Heritage at Stonebridge is a premier gated community in Summerlin offering luxury custom homes, resort-style amenities, A-rated schools, and stunning mountain views. It's one of Las Vegas's most prestigious master-planned communities.</p>
          </div>
        </div>

        <div itemscope itemtype="https://schema.org/Question" class="heritage-card p-6">
          <h3 itemprop="name" class="text-xl font-semibold mb-3">What is the price range for homes in Heritage at Stonebridge?</h3>
          <div itemscope itemtype="https://schema.org/Answer">
            <p itemprop="text">Homes in Heritage at Stonebridge range from approximately $800,000 to $2,500,000, with a median price around $1,250,000. Prices vary based on size, location, and custom features.</p>
          </div>
        </div>

        <div itemscope itemtype="https://schema.org/Question" class="heritage-card p-6">
          <h3 itemprop="name" class="text-xl font-semibold mb-3">What amenities are available in the community?</h3>
          <div itemscope itemtype="https://schema.org/Answer">
            <p itemprop="text">Residents enjoy resort-style amenities including a pool and spa, championship golf course access, fitness center, tennis courts, gated security, and walking trails throughout the community.</p>
          </div>
        </div>

        <div itemscope itemtype="https://schema.org/Question" class="heritage-card p-6">
          <h3 itemprop="name" class="text-xl font-semibold mb-3">How can I schedule a viewing of available homes?</h3>
          <div itemscope itemtype="https://schema.org/Answer">
            <p itemprop="text">Contact Dr. Jan Duffy at (702) 222-1964 or email jan.duffy@heritagestonebridge.com to schedule a private showing of available homes in Heritage at Stonebridge.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @import '../../assets/css/tailwind.css';

  .hero-section {
    background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container-max {
    max-width: 1200px;
    margin: 0 auto;
  }

  .heritage-card {
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .heritage-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .heritage-button {
    background: #8B4513;
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
  }

  .heritage-button:hover {
    background: #654321;
    transform: translateY(-2px);
  }
</style>
