require('dotenv').config();

module.exports = {
  origin: 'https://drjanduffy.github.io/StonebridgeHomes',
  lang: 'en',
  srcDir: 'src',
  distDir: 'public',
  rootDir: process.cwd(),
  build: {
    minify: true,
    inlineCSS: true,
    inlineJS: true,
  },
  prefix: '',
  server: {
    prefix: '',
    port: 3000,
  },
  props: {
    hydration: 'hybrid',
    compress: true,
  },
  debug: {
    stacks: false,
    hooks: false,
    performance: false,
    build: false,
    automagic: false,
  },
  hooks: {
    // disable: ['elderWriteHtmlFileToPublic'],
  },
  plugins: {
    '@elderjs/plugin-markdown': {
      routes: ['blog'],
    },
    '@elderjs/plugin-browser-reload': {
      port: 3000,
      reload: true,
    },
    '@elderjs/plugin-seo-check': {
      display: ['errors', 'warnings'],
      writeLocation: './seo-report.json',
    },
  },
  shortcodes: { 
    closePattern: '}}', 
    openPattern: '{{' 
  },
  // SEO Configuration
  seo: {
    siteName: 'Heritage at Stonebridge',
    siteDescription: 'Premier luxury homes in Heritage at Stonebridge, Summerlin\'s most prestigious gated community. Find your dream home with Dr. Jan Duffy.',
    defaultImage: '/images/heritage-stonebridge-og.jpg',
    twitterHandle: '@DrJanDuffy',
    author: 'Dr. Jan Duffy',
  },
};

