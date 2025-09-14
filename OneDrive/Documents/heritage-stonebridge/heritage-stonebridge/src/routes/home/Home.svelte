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
  title="Heritage at Stonebridge - Luxury Homes in Summerlin, Las Vegas"
  description="Discover luxury homes in Heritage at Stonebridge, Summerlin's premier gated community. Find your dream home with Dr. Jan Duffy, your trusted real estate professional."
  keywords={['Heritage Stonebridge', 'Summerlin homes', 'Las Vegas real estate', 'luxury homes', 'Dr. Jan Duffy', 'gated community']}
  canonical="https://drjanduffy.github.io/StonebridgeHomes/"
  openGraph={{
    title: "Heritage at Stonebridge - Premier Luxury Homes",
    description: "Experience luxury living in Heritage at Stonebridge, Summerlin's most prestigious gated community.",
    image: "/images/heritage-stonebridge-og.jpg",
    url: "https://drjanduffy.github.io/StonebridgeHomes/"
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
