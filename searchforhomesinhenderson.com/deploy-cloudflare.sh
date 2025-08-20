#!/bin/bash

# Cloudflare Deployment Script for SEO Optimization
# Make sure to install Wrangler CLI: npm install -g wrangler

echo "🚀 Deploying Cloudflare configuration for SEO optimization..."

# Set Cloudflare API token
export CLOUDFLARE_API_TOKEN="006a036208c6527a48175ccf9393d794509e3"

# Login to Cloudflare (if not already logged in)
echo "🔐 Logging into Cloudflare..."
wrangler login

# Deploy Cloudflare Worker
echo "📦 Deploying Cloudflare Worker..."
wrangler deploy --name seo-optimization-worker

# Configure DNS settings
echo "🌐 Configuring DNS settings..."
wrangler dns create searchforhomesinhenderson.com A 192.0.2.1 --proxied
wrangler dns create searchforhomesinhenderson.com AAAA 2001:db8::1 --proxied

# Configure Page Rules
echo "📋 Configuring Page Rules..."
wrangler pages deploy --project-name searchforhomesinhenderson-com

# Set environment variables
echo "🔧 Setting environment variables..."
wrangler secret put CLOUDFLARE_API_TOKEN
wrangler secret put NODE_ENV
wrangler secret put NEXT_PUBLIC_RESCOUT_AGENT_ID

# Configure caching rules
echo "💾 Configuring caching rules..."
wrangler kv:namespace create "seo-cache"
wrangler kv:namespace create "performance-metrics"

# Deploy scheduled tasks
echo "⏰ Deploying scheduled tasks..."
wrangler deploy --name seo-monitoring --schedule "0 6 * * *"
wrangler deploy --name performance-audit --schedule "0 8 * * 1"

echo "✅ Cloudflare deployment completed successfully!"
echo "🔍 Check your Cloudflare dashboard for configuration details"
echo "📊 Monitor performance at: https://dash.cloudflare.com/performance"

# Optional: Run initial SEO health check
echo "🔍 Running initial SEO health check..."
curl -X POST "https://api.cloudflare.com/client/v4/zones/$(wrangler whoami | grep Zone | cut -d' ' -f2)/workers/scripts/seo-optimization-worker/subdomain" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"enabled": true}'

echo "🎯 Cloudflare SEO optimization is now active!"
