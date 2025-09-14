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
</script>

<SEO
  title="Heritage at Stonebridge - Premier Summerlin Community | Las Vegas Real Estate"
  description="Discover luxury living at Heritage at Stonebridge in Summerlin, Las Vegas. Custom homes, resort-style amenities, and A-rated schools. Your Dr. Jan Duffy, local expert."
  canonical="https://heritagestonebridge.com"
  keywords={['Heritage Stonebridge', 'Summerlin homes', 'Las Vegas real estate', 'luxury homes', 'Dr. Jan Duffy', 'gated community', 'custom homes', 'resort amenities', 'A-rated schools']}
  openGraph={{
    type: 'website',
    url: 'https://heritagestonebridge.com',
    title: 'Heritage at Stonebridge - Premier Summerlin Community',
    description: 'Luxury homes in exclusive Summerlin community with resort amenities',
    image: 'https://heritagestonebridge.com/images/community-hero.jpg'
  }}
  jsonLd={{
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Dr. Jan Duffy",
    "url": "https://heritagestonebridge.com",
    "areaServed": "Heritage at Stonebridge, Summerlin, Las Vegas",
    "telephone": "702-222-1964",
    "knowsAbout": "Luxury Real Estate, Summerlin Communities, Heritage at Stonebridge"
  }}
/>

<div class="hero-section text-center">
  <div class="container-max px-4">
    <h1 class="text-5xl font-bold mb-4">
      Welcome to {communityName}
    </h1>
    <p class="text-xl mb-6">
      Premier luxury living in {location}
    </p>
    <a href="tel:{agent.phone}" class="heritage-button text-lg">
      Call Dr. Jan Duffy: {agent.phone}
    </a>
  </div>
</div>

<section class="section-padding">
  <div class="container-content">
    <h2 class="heritage-heading text-center">Community Amenities</h2>
    <div class="grid-responsive">
      {#each amenities as amenity}
        <div class="heritage-card p-6 text-center">
          <p class="font-semibold">{amenity}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @import '../../assets/css/tailwind.css';
</style>
