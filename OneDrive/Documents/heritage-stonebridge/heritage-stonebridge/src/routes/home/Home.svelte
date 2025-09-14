<script>
  export let props;

  const { hero, community, featuredHomes, amenities, agent } = props;

  function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  }
</script>

<svelte:head>
  <title>Heritage at Stonebridge - Luxury Homes in Summerlin, Las Vegas</title>
  <meta name="description" content="Discover luxury homes in Heritage at Stonebridge, Summerlin's premier gated community. Find your dream home with Dr. Jan Duffy, your trusted real estate professional." />
</svelte:head>

<main class="homepage">
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-background" style="background-image: url('{hero.backgroundImage}')">
      <div class="hero-overlay">
        <div class="container">
          <div class="hero-content">
            <h1>{hero.title}</h1>
            <p class="hero-subtitle">{hero.subtitle}</p>
            <p class="hero-description">{hero.description}</p>
            <div class="hero-actions">
              <a href="/homes" class="btn btn-primary">View Available Homes</a>
              <a href="/contact" class="btn btn-secondary">Contact Agent</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Community Overview -->
  <section class="community-overview">
    <div class="container">
      <div class="community-content">
        <div class="community-text">
          <h2>Welcome to {community.name}</h2>
          <p class="community-location">{community.location}</p>
          <p class="community-description">{community.description}</p>
          <a href="/community" class="btn btn-outline">Learn More About Our Community</a>
        </div>
        <div class="community-stats">
          {#each community.stats as stat}
            <div class="stat-item">
              <div class="stat-value">{stat.value}</div>
              <div class="stat-label">{stat.label}</div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Homes -->
  <section class="featured-homes">
    <div class="container">
      <div class="section-header">
        <h2>Featured Homes</h2>
        <p>Discover our latest available properties</p>
        <a href="/homes" class="btn btn-outline">View All Homes</a>
      </div>
      <div class="homes-grid">
        {#each featuredHomes as home}
          <div class="home-card">
            <div class="home-image">
              <img src={home.image} alt={home.address} />
              <div class="home-status">{home.status}</div>
            </div>
            <div class="home-content">
              <div class="home-price">{formatPrice(home.price)}</div>
              <div class="home-address">{home.address}</div>
              <div class="home-details">
                <span>{home.bedrooms} bed</span>
                <span>{home.bathrooms} bath</span>
                <span>{home.squareFeet.toLocaleString()} sq ft</span>
              </div>
              <a href="/{home.id}" class="btn btn-primary">View Details</a>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Amenities -->
  <section class="amenities-section">
    <div class="container">
      <div class="section-header">
        <h2>Community Amenities</h2>
        <p>Experience luxury living with world-class amenities</p>
      </div>
      <div class="amenities-grid">
        {#each amenities as amenity}
          <div class="amenity-card">
            <div class="amenity-icon">{amenity.icon}</div>
            <h3>{amenity.name}</h3>
            <p>{amenity.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Market Stats -->
  <section class="market-stats">
    <div class="container">
      <div class="stats-content">
        <div class="stats-text">
          <h2>Market Insights</h2>
          <p>Heritage at Stonebridge continues to be one of Summerlin's most sought-after communities with strong appreciation and high demand.</p>
          <a href="/market-report" class="btn btn-outline">View Market Report</a>
        </div>
        <div class="stats-numbers">
          <div class="stat-box">
            <div class="stat-number">8.5%</div>
            <div class="stat-text">Price Appreciation</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">44</div>
            <div class="stat-text">Avg Days on Market</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">96.8%</div>
            <div class="stat-text">List to Sale Ratio</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Agent Section -->
  <section class="agent-section">
    <div class="container">
      <div class="agent-content">
        <div class="agent-image">
          <img src={agent.image} alt={agent.name} />
        </div>
        <div class="agent-info">
          <h2>Meet Your Real Estate Professional</h2>
          <h3>{agent.name}</h3>
          <p class="agent-title">{agent.title}</p>
          <p class="agent-description">
            With years of experience in the Summerlin market, I'm here to help you find your perfect home in Heritage at Stonebridge.
            Let me guide you through every step of the buying or selling process.
          </p>
          <div class="agent-contact">
            <a href="tel:{agent.phone}" class="contact-btn phone">📞 {agent.phone}</a>
            <a href="mailto:{agent.email}" class="contact-btn email">✉️ Email Me</a>
          </div>
          <a href="/contact" class="btn btn-primary">Get In Touch</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Quick Links -->
  <section class="quick-links">
    <div class="container">
      <h2>Explore More</h2>
      <div class="links-grid">
        <a href="/community" class="link-card">
          <div class="link-icon">🏘️</div>
          <h3>Community</h3>
          <p>Learn about our amenities and lifestyle</p>
        </a>
        <a href="/neighborhood" class="link-card">
          <div class="link-icon">📍</div>
          <h3>Neighborhood</h3>
          <p>Discover Summerlin's attractions</p>
        </a>
        <a href="/sold" class="link-card">
          <div class="link-icon">📊</div>
          <h3>Recent Sales</h3>
          <p>View recent market activity</p>
        </a>
        <a href="/market-report" class="link-card">
          <div class="link-icon">📈</div>
          <h3>Market Report</h3>
          <p>Current market trends and data</p>
        </a>
      </div>
    </div>
  </section>
</main>

<style>
  .homepage {
    min-height: 100vh;
  }

  .hero {
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .hero-content {
    text-align: center;
    color: white;
    max-width: 800px;
  }

  .hero-content h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    opacity: 0.9;
  }

  .hero-description {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.8;
    line-height: 1.6;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .btn-primary {
    background: #667eea;
    color: white;
  }

  .btn-primary:hover {
    background: #5a67d8;
  }

  .btn-secondary {
    background: transparent;
    color: white;
    border-color: white;
  }

  .btn-secondary:hover {
    background: white;
    color: #667eea;
  }

  .btn-outline {
    background: transparent;
    color: #667eea;
    border-color: #667eea;
  }

  .btn-outline:hover {
    background: #667eea;
    color: white;
  }

  section {
    padding: 4rem 0;
  }

  section:nth-child(even) {
    background-color: #f8f9fa;
  }

  .community-overview {
    padding: 4rem 0;
  }

  .community-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .community-text h2 {
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .community-location {
    color: #667eea;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .community-description {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .community-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .stat-item {
    text-align: center;
    padding: 1.5rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .stat-value {
    font-size: 2rem;
    font-weight: bold;
    color: #667eea;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    color: #666;
    font-size: 0.9rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .section-header h2 {
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .section-header p {
    color: #666;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .homes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  .home-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .home-card:hover {
    transform: translateY(-5px);
  }

  .home-image {
    position: relative;
    height: 250px;
    overflow: hidden;
  }

  .home-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .home-status {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #28a745;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .home-content {
    padding: 1.5rem;
  }

  .home-price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #667eea;
    margin-bottom: 0.5rem;
  }

  .home-address {
    font-size: 1.1rem;
    font-weight: 500;
    color: #333;
    margin-bottom: 1rem;
  }

  .home-details {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    color: #666;
  }

  .amenities-section {
    background: white;
  }

  .amenities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .amenity-card {
    text-align: center;
    padding: 2rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .amenity-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .amenity-card h3 {
    color: #333;
    margin-bottom: 1rem;
  }

  .amenity-card p {
    color: #666;
  }

  .market-stats {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }

  .stats-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .stats-text h2 {
    color: white;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .stats-text p {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .stats-numbers {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .stat-box {
    text-align: center;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    backdrop-filter: blur(10px);
  }

  .stat-number {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .stat-text {
    font-size: 1rem;
    opacity: 0.9;
  }

  .agent-section {
    padding: 4rem 0;
  }

  .agent-content {
      display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    align-items: center;
  }

  .agent-image {
    text-align: center;
  }

  .agent-image img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .agent-info h2 {
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .agent-info h3 {
    color: #667eea;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .agent-title {
    color: #666;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  .agent-description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .agent-contact {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .contact-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .contact-btn.phone {
    background: #28a745;
    color: white;
  }

  .contact-btn.phone:hover {
    background: #218838;
  }

  .contact-btn.email {
    background: #667eea;
    color: white;
  }

  .contact-btn.email:hover {
    background: #5a67d8;
  }

  .quick-links {
    background: #f8f9fa;
  }

  .quick-links h2 {
    text-align: center;
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }

  .links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .link-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-decoration: none;
    color: inherit;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .link-card:hover {
    transform: translateY(-5px);
  }

  .link-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .link-card h3 {
    color: #333;
    margin-bottom: 1rem;
  }

  .link-card p {
    color: #666;
  }

  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2.5rem;
    }

    .hero-actions {
      flex-direction: column;
      align-items: center;
    }

    .community-content,
    .stats-content,
    .agent-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .community-stats {
      grid-template-columns: 1fr;
    }

    .agent-contact {
      flex-direction: column;
    }
  }
</style>
