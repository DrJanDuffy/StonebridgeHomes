# 🔍 Google Search Console Setup Guide for Stonebridge Homes

## Overview
This guide will help you set up and verify your site with Google Search Console for optimal SEO performance.

## 📋 Prerequisites
- Site deployed to production (e.g., stonebridge-homes.vercel.app)
- Google account
- Access to Google Search Console

## 🚀 Setup Steps

### Step 1: Access Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click "Add Property" and select "URL prefix"

### Step 2: Verify Ownership
**Option A: HTML File Upload**
1. Download Google's verification HTML file
2. Place it in the `public/` directory
3. Commit and deploy
4. Verify in Google Search Console

**Option B: Meta Tag Verification**
1. Copy the verification meta tag from Google
2. Add it to `src/components/router-head/router-head.tsx` in the `<head>` section
3. Commit and deploy
4. Verify in Google Search Console

**Option C: Domain Verification (if using custom domain)**
1. Add the DNS TXT record provided by Google
2. Verify in Google Search Console

### Step 3: Submit Sitemap
1. In Google Search Console, go to "Sitemaps"
2. Enter: `https://stonebridge-homes.vercel.app/sitemap.xml`
3. Click "Submit"
4. Wait for Google to process (24-48 hours)

### Step 4: Monitor Indexing Status
- Check "Coverage" for indexing status
- Review "Performance" for search queries and clicks
- Monitor "Mobile Usability" for mobile-friendly issues

## ✅ Available URLs for Verification

### Sitemap
```
https://stonebridge-homes.vercel.app/sitemap.xml
```

### Robots.txt
```
https://stonebridge-homes.vercel.app/robots.txt
```

## 🎯 Key Pages to Monitor

| Page | URL | Priority |
|------|-----|----------|
| Homepage | `/` | 1.0 |
| Available Homes | `/homes` | 0.9 |
| Community Info | `/community` | 0.9 |
| Contact | `/contact` | 0.8 |
| Market Report | `/market-report` | 0.7 |

## 📊 Structured Data Added

### Real Estate Agent Schema
- **Type**: RealEstateAgent
- **Name**: Dr. Jan Duffy
- **Location**: Summerlin, Las Vegas, NV
- **Contact**: Phone, Email

### Where to Add
- JSON-LD on homepage via `StructuredData` component
- Can be extended to property listings

## 🔧 Ongoing Maintenance

### Monthly Tasks
1. Check for crawl errors in Google Search Console
2. Review search performance data
3. Monitor Core Web Vitals
4. Update sitemap if adding new pages

### Quarterly Tasks
1. Review and update meta descriptions
2. Check for broken links
3. Analyze search queries and optimize content
4. Review mobile usability reports

## 🚨 Common Issues & Solutions

### Issue: Site Not Indexed
**Solution**: 
- Submit sitemap in Google Search Console
- Request indexing for individual pages
- Check robots.txt isn't blocking Googlebot

### Issue: Crawl Errors
**Solution**:
- Fix broken links
- Ensure all pages return 200 status codes
- Remove or fix 404 errors

### Issue: Mobile Usability Problems
**Solution**:
- Test with Google's Mobile-Friendly Test
- Fix tap targets that are too close
- Ensure content fits mobile screens

## 📝 Verification Files Created

### Files Added
✅ `src/routes/robots.ts` - Robots.txt handler
✅ `src/routes/sitemap.ts` - Sitemap generator
✅ `src/components/StructuredData.tsx` - JSON-LD component
✅ Enhanced meta tags with Open Graph and Twitter Cards

### Next Steps After Deployment
1. Deploy site to production
2. Verify ownership in Google Search Console
3. Submit sitemap
4. Request indexing for key pages
5. Monitor performance over time

## 📈 Expected Benefits

- ✅ Improved search visibility
- ✅ Better understanding of search performance
- ✅ Early detection of crawling issues
- ✅ Enhanced indexing of your content
- ✅ Rich results in search with structured data

## 🔗 Useful Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Google Search Console](https://search.google.com/search-console)
- [Structured Data Testing Tool](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## 📧 Support
For questions about Google Search Console setup:
- Email: jan.duffy@heritagestonebridge.com
- Phone: (702) 222-1964

---

**Last Updated**: October 2025
**Site**: stonebridge-homes.vercel.app
**Managed by**: Dr. Jan Duffy

