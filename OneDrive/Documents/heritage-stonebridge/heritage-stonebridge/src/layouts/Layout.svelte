<script>
  import style from '../../assets/style.css';
  import tailwind from '../../assets/css/tailwind.css';
  export let templateHtml, settings;
</script>

<style>
  @import '../../assets/css/tailwind.css';
  
  :global(h1) {
    font-style: italic;
  }
  
  :root {
    --balloon-color: #8B4513;
    --balloon-font-size: 14px;
  }
  
  .footer {
    padding: 2rem 0;
    background: var(--heritage-dark);
    padding-top: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    color: #f4f7fb;
    text-align: center;
    font-size: 14px;
  }
  
  .footer a {
    color: #f4f7fb;
  }
  
  :global(ul li),
  :global(ol li) {
    margin-bottom: 0.3rem;
  }
</style>

<svelte:head>
  <!-- You can remove this balloon it is just for hover effects -->
  <link rel="stylesheet" href="https://unpkg.com/balloon-css/balloon.min.css" />
  <script>
    document.addEventListener('ejs', (e) => {
      console.log('Layout.svelte > Component Mount Detail', e.detail);
    });
  </script>
</svelte:head>

<div class="min-h-screen bg-heritage-light">
  {@html templateHtml}
</div>
<div class="heritage-footer">
  <div class="container-content">
    <div class="text-center">
      <p class="mb-4">🏠 Heritage at Stonebridge - Premier Luxury Living in Summerlin</p>
      <p class="text-sm text-gray-400">
        Built with ❤ and <a href="https://elderguide.com/tech/elderjs/" class="footer-link">Elder.js</a> | 
        <a href="/contact" class="footer-link">Contact Dr. Jan Duffy</a>
      </p>
    </div>
  </div>
</div>
