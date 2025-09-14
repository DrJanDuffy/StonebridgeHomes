<script>
  export let title;
  export let description;
  export let keywords = [];
  export let canonical;
  export let openGraph = {};
  export let jsonLd = {};

  // Generate keywords string
  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  // Default Open Graph values
  const ogTitle = openGraph.title || title;
  const ogDescription = openGraph.description || description;
  const ogImage = openGraph.image || '/images/heritage-stonebridge-og.jpg';
  const ogUrl = openGraph.url || canonical;
  const ogType = openGraph.type || 'website';
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  {#if keywordsString}
    <meta name="keywords" content={keywordsString} />
  {/if}

  <!-- Canonical URL -->
  {#if canonical}
    <link rel="canonical" href={canonical} />
  {/if}

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={ogType} />
  <meta property="og:title" content={ogTitle} />
  <meta property="og:description" content={ogDescription} />
  {#if ogImage}
    <meta property="og:image" content={ogImage} />
  {/if}
  {#if ogUrl}
    <meta property="og:url" content={ogUrl} />
  {/if}

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content={ogTitle} />
  <meta property="twitter:description" content={ogDescription} />
  {#if ogImage}
    <meta property="twitter:image" content={ogImage} />
  {/if}

  <!-- Structured Data - handled by sitemap hook -->
</svelte:head>
