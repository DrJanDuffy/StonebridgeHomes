<script>
  import style from '../../assets/style.css';
  export let templateHtml, settings;

  // Skip to main content for accessibility
  function skipToMain() {
    const main = document.querySelector('main');
    if (main) {
      main.focus();
      main.scrollIntoView();
    }
  }
</script>

<style>
  @import '../../assets/css/tailwind.css';

  :global(h1) {
    font-style: italic;
    font-weight: 700;
    line-height: 1.2;
  }

  :global(h2) {
    font-weight: 600;
    line-height: 1.3;
  }

  :global(h3) {
    font-weight: 500;
    line-height: 1.4;
  }

  :root {
    --balloon-color: #8B4513;
    --balloon-font-size: 14px;
    --heritage-primary: #8B4513;
    --heritage-secondary: #D2691E;
    --heritage-dark: #654321;
    --heritage-light: #F5F5DC;
    --heritage-neutral: #F8F8FF;
  }

  /* Skip link for accessibility */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--heritage-primary);
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
    transition: top 0.3s;
  }

  .skip-link:focus {
    top: 6px;
  }

  /* Enhanced footer */
  .heritage-footer {
    padding: 3rem 0 2rem;
    background: var(--heritage-dark);
    color: #f4f7fb;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  .heritage-footer a {
    color: #f4f7fb;
    text-decoration: underline;
    transition: color 0.3s ease;
  }

  .heritage-footer a:hover {
    color: var(--heritage-secondary);
  }

  /* Semantic HTML improvements */
  :global(main) {
    outline: none;
  }

  :global(main:focus) {
    outline: 2px solid var(--heritage-primary);
    outline-offset: 2px;
  }

  /* Performance optimizations */
  :global(img) {
    loading: lazy;
    decoding: async;
  }

  :global(img[data-critical]) {
    loading: eager;
  }

  /* Print styles */
  @media print {
    .heritage-footer {
      display: none;
    }

    :global(.no-print) {
      display: none !important;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    :global(*) {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* High contrast support */
  @media (prefers-contrast: high) {
    :global(.heritage-button) {
      border: 2px solid currentColor;
    }
  }
</style>

<svelte:head>
  <!-- Preload critical resources -->
  <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="/images/heritage-stonebridge-og.jpg" as="image" />

  <!-- Font loading optimization -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Georgia:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />

  <!-- Favicon and app icons -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />

  <!-- Performance monitoring -->
  <script>
    // Core Web Vitals monitoring
    if ('web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    // Lazy loading polyfill for older browsers
    if ('IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => imageObserver.observe(img));
    }
  </script>
</svelte:head>

<!-- Skip to main content link for accessibility -->
<a href="#main-content" class="skip-link" on:click={skipToMain}>
  Skip to main content
</a>

<div class="min-h-screen bg-heritage-light" role="document">
  <!-- Main navigation -->
  <nav role="navigation" aria-label="Main navigation" class="no-print">
    <div class="container-max">
      <ul class="flex justify-center space-x-8 py-4">
        <li><a href="/" class="text-heritage-primary hover:text-heritage-secondary">Home</a></li>
        <li><a href="/community" class="text-heritage-primary hover:text-heritage-secondary">Community</a></li>
        <li><a href="/homes" class="text-heritage-primary hover:text-heritage-secondary">Available Homes</a></li>
        <li><a href="/sold" class="text-heritage-primary hover:text-heritage-secondary">Recent Sales</a></li>
        <li><a href="/neighborhood" class="text-heritage-primary hover:text-heritage-secondary">Neighborhood</a></li>
        <li><a href="/market-report" class="text-heritage-primary hover:text-heritage-secondary">Market Report</a></li>
        <li><a href="/contact" class="text-heritage-primary hover:text-heritage-secondary">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- Main content area -->
  <main id="main-content" tabindex="-1" role="main">
    {@html templateHtml}
  </main>

  <!-- Enhanced footer with structured data -->
  <footer class="heritage-footer" role="contentinfo">
    <div class="container-max">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Contact Information -->
        <div itemscope itemtype="https://schema.org/RealEstateAgent">
          <h3 class="text-xl font-semibold mb-4">Contact Information</h3>
          <div itemprop="name">Dr. Jan Duffy</div>
          <div itemprop="jobTitle">Real Estate Professional</div>
          <div itemprop="telephone">
            <a href="tel:+17022221964">(702) 222-1964</a>
          </div>
          <div itemprop="email">
            <a href="mailto:jan.duffy@heritagestonebridge.com">jan.duffy@heritagestonebridge.com</a>
          </div>
          <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
            <span itemprop="addressLocality">Summerlin</span>,
            <span itemprop="addressRegion">NV</span>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="/community">Community Overview</a></li>
            <li><a href="/homes">Available Homes</a></li>
            <li><a href="/sold">Recent Sales</a></li>
            <li><a href="/market-report">Market Report</a></li>
            <li><a href="/neighborhood">Local Area</a></li>
          </ul>
        </div>

        <!-- Social & Legal -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Connect With Us</h3>
          <div class="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/heritagestonebridge" aria-label="Facebook">📘</a>
            <a href="https://www.linkedin.com/in/dr-jan-duffy" aria-label="LinkedIn">💼</a>
            <a href="https://twitter.com/DrJanDuffy" aria-label="Twitter">🐦</a>
          </div>
          <div class="text-sm">
            <p>© 2024 Heritage at Stonebridge</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>

      <!-- Bottom footer -->
      <div class="border-t border-gray-600 pt-6 text-center text-sm">
        <p class="mb-2">
          🏠 Heritage at Stonebridge - Premier Luxury Living in Summerlin, Las Vegas
        </p>
        <p class="text-gray-400">
          Built with ❤ and <a href="https://elderguide.com/tech/elderjs/" class="text-heritage-secondary">Elder.js</a> |
          <a href="/contact" class="text-heritage-secondary">Contact Dr. Jan Duffy</a> |
          <a href="/privacy" class="text-heritage-secondary">Privacy Policy</a>
        </p>
      </div>
    </div>
  </footer>
</div>
