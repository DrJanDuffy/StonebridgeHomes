# 🚀 Vercel Deployment Guide for Stonebridge Homes

## Issues Fixed in Deployment

### Problem
The previous deployment completed in 54ms with "no files were prepared" because:
1. Building from wrong branch (`dependabot/npm_and_yarn/vitest-4.0.4` instead of `main`)
2. Vercel configuration was not optimized for Qwik
3. Incorrect build commands in package.json

### Solution Applied

#### 1. Updated `vercel.json`
```json
{
  "buildCommand": "npm run build && npm run build.ssr",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm install",
  "builds": [
    {
      "src": "dist/server/entry.ssr.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/assets/(.*)",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    {
      "src": "/(.*)",
      "dest": "/dist/server/entry.ssr.js"
    }
  ]
}
```

#### 2. Updated `package.json` Scripts
```json
{
  "build": "vite build",
  "build.ssr": "vite build --mode ssr",
  "vercel-build": "npm run build && npm run build.ssr"
}
```

## Deploying to Vercel

### Option 1: Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Option 2: GitHub Integration
1. Push code to `main` branch on GitHub
2. Vercel will automatically detect and deploy
3. Connect your GitHub repository in Vercel dashboard
4. Configure build settings:
   - Framework: Vite
   - Build Command: `npm run build && npm run build.ssr`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Option 3: Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: Vite
   - Root Directory: `.`
   - Build Command: `npm run build && npm run build.ssr`
   - Output Directory: `dist`
   - Install Command: `npm install`

## Branch Deployments

### Important Note
The deployment was building from the wrong branch:
- ❌ Was building from: `dependabot/npm_and_yarn/vitest-4.0.4`
- ✅ Should build from: `main`

### To Fix:
1. Merge the dependabot branch into main
2. OR set production branch to main in Vercel settings
3. Clear Vercel deployment cache if needed

## Build Process

The Vercel build now runs:
1. `npm install` - Install dependencies
2. `npm run build` - Build client bundle
3. `npm run build.ssr` - Build server bundle

## Expected Build Output

```
✓ Built client bundle (dist/client/)
✓ Built server bundle (dist/server/)
✓ Generated manifest
✓ Optimized assets
```

## Verification

After deployment, verify:
1. Site loads at production URL
2. `/robots.txt` is accessible
3. `/sitemap.xml` is accessible
4. All routes work correctly
5. Check browser console for errors

## Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] All routes accessible (`/`, `/homes`, `/community`, `/contact`)
- [ ] SEO files work: `/robots.txt`, `/sitemap.xml`
- [ ] Structured data visible in HTML source
- [ ] Meta tags present (Open Graph, Twitter Cards)
- [ ] Submit sitemap to Google Search Console
- [ ] Test mobile responsiveness
- [ ] Verify performance (Lighthouse score)

## Troubleshooting

### Build Fails with "sharp" error
**Solution**: Ignore this warning - it's only used for image optimization and not required

### "No files prepared" error
**Solution**: 
- Check you're deploying from `main` branch
- Verify vercel.json configuration
- Ensure build commands are correct

### Routes not working
**Solution**:
- Check vercel.json routes configuration
- Ensure dist/server/entry.ssr.js exists
- Verify dist/client/ has assets

### Environment Variables
If you need to add environment variables:
1. Go to Vercel Project Settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

## Performance Optimizations Applied

✅ Automatic code splitting  
✅ Tree shaking for minimal bundle  
✅ Optimized asset caching  
✅ Immutable cache headers  
✅ SSR for fast initial load  

## SEO Features Included

✅ `robots.ts` - Search engine directives  
✅ `sitemap.ts` - XML sitemap generation  
✅ Structured data (JSON-LD) - RealEstateAgent schema  
✅ Enhanced meta tags  
✅ Open Graph tags  
✅ Twitter Card tags  

## Next Steps After Successful Deployment

1. **Submit to Google Search Console**
   - URL: `https://your-domain.vercel.app`
   - Sitemap: `https://your-domain.vercel.app/sitemap.xml`

2. **Monitor Performance**
   - Use Vercel Analytics
   - Track Core Web Vitals
   - Monitor error rates

3. **Update Documentation**
   - Update README with production URL
   - Document any environment variables needed
   - Keep deployment guide current

## Support

For deployment issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Review build logs in Vercel dashboard
- Contact: jan.duffy@heritagestonebridge.com

---

**Last Updated**: October 2025
**Deployment Platform**: Vercel
**Framework**: Qwik + Vite

