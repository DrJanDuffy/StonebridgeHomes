<script>
  export let title;
  export let description;
  export let keywords = [];
  export let canonical;
  export let openGraph = {};
  export let jsonLd = {};
  export let breadcrumbs = [];
  export let noindex = false;
  export let robots = 'index, follow';

  // Generate keywords string
  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  // Default Open Graph values
  const ogTitle = openGraph.title || title;
  const ogDescription = openGraph.description || description;
  const ogImage = openGraph.image || 'https://heritagestonebridge.com/images/heritage-stonebridge-og.jpg';
  const ogUrl = openGraph.url || canonical;
  const ogType = openGraph.type || 'website';

  // Generate breadcrumb JSON-LD
  function generateBreadcrumbJsonLd() {
    if (breadcrumbs.length === 0) return null;

    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };

    return JSON.stringify(breadcrumbList);
  }

  // Generate enhanced JSON-LD for real estate
  function generateEnhancedJsonLd() {
    if (!jsonLd || Object.keys(jsonLd).length === 0) return null;

    const baseSchema = {
      "@context": "https://schema.org",
      "@type": jsonLd.type || "RealEstateAgent",
      "name": jsonLd.name || "Dr. Jan Duffy",
      "url": jsonLd.url || "https://heritagestonebridge.com",
      "logo": "https://heritagestonebridge.com/images/logo.png",
      "image": "https://heritagestonebridge.com/images/heritage-stonebridge-og.jpg",
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Heritage at Stonebridge",
        "addressLocality": "Summerlin",
        "addressRegion": "NV",
        "postalCode": "89144",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "City",
        "name": "Summerlin, Las Vegas, NV"
      },
      "telephone": "+1-702-222-1964",
      "email": "jan.duffy@heritagestonebridge.com",
      "sameAs": [
        "https://www.facebook.com/heritagestonebridge",
        "https://www.linkedin.com/in/dr-jan-duffy",
        "https://twitter.com/DrJanDuffy"
      ]
    };

    // Merge with provided JSON-LD
    return JSON.stringify({ ...baseSchema, ...jsonLd });
  }
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta name="author" content="Dr. Jan Duffy" />
  <meta name="robots" content={noindex ? 'noindex, nofollow' : robots} />
  {#if keywordsString}
    <meta name="keywords" content={keywordsString} />
  {/if}

  <!-- Canonical URL -->
  {#if canonical}
    <link rel="canonical" href={canonical} />
  {/if}

  <!-- Language and Geo Tags -->
  <meta name="language" content="en-US" />
  <meta name="geo.region" content="US-NV" />
  <meta name="geo.placename" content="Summerlin, Las Vegas" />
  <meta name="geo.position" content="36.1699;-115.1398" />
  <meta name="ICBM" content="36.1699, -115.1398" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={ogType} />
  <meta property="og:title" content={ogTitle} />
  <meta property="og:description" content={ogDescription} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Heritage at Stonebridge luxury homes in Summerlin" />
  {#if ogUrl}
    <meta property="og:url" content={ogUrl} />
  {/if}
  <meta property="og:site_name" content="Heritage at Stonebridge" />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={ogTitle} />
  <meta name="twitter:description" content={ogDescription} />
  <meta name="twitter:image" content={ogImage} />
  <meta name="twitter:image:alt" content="Heritage at Stonebridge luxury homes in Summerlin" />
  <meta name="twitter:site" content="@DrJanDuffy" />
  <meta name="twitter:creator" content="@DrJanDuffy" />

  <!-- Additional SEO Meta Tags -->
  <meta name="theme-color" content="#8B4513" />
  <meta name="msapplication-TileColor" content="#8B4513" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

  <!-- Structured Data - JSON-LD -->
  {#if generateEnhancedJsonLd()}
    <script type="application/ld+json">
      {generateEnhancedJsonLd()}
    </script>
  {/if}

  {#if generateBreadcrumbJsonLd()}
    <script type="application/ld+json">
      {generateBreadcrumbJsonLd()}
    </script>
  {/if}

  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="dns-prefetch" href="//www.google-analytics.com" />
  <link rel="dns-prefetch" href="//maps.googleapis.com" />

  <!-- Critical CSS inline for performance -->
  <style>
    /* Critical above-the-fold CSS */
    .hero-section {
      background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
    }
    .container-max { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
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
</svelte:head>
