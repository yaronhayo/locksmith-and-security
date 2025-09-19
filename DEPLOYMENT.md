# Deployment Configuration Guide

## Overview
This document outlines the critical configurations needed for optimal deployment of the locksmith website to Vercel.

## ✅ Fixed Issues
- **Image Path References**: All `/website-uploads/` references corrected to `/lovable-uploads/`
- **Domain Configuration**: Updated placeholder `https://your-domain.com` to `https://247locksmithandsecurity.com`
- **Sitemap Images**: Removed non-existent image references to prevent 404 errors
- **Security Headers**: Improved CSP policy, removed unsafe external scripts
- **Manifest Icons**: Updated to use correct image paths

## 🔧 Required Environment Variables

### Analytics & Tracking (Optional but Recommended)
Set these in Vercel dashboard under Settings → Environment Variables:

```
VITE_CLOUDFLARE_TOKEN=your-cloudflare-analytics-token
VITE_GTM_ID=GTM-MNWHJSS6 (already configured)
VITE_GA_ID=G-ZE9WV5PLTD (already configured)
VITE_CLARITY_ID=pk2zfzjlwa (already configured)
```

### Database (Already Configured)
- Supabase integration is already set up
- Database connection: `https://mtbgayqzjrxjjmsjikcg.supabase.co`

### Email Service (Requires Setup)
- Contact forms reference: `support@247locksmithandsecurity.com`
- Configure email service provider (SendGrid, Postmark, etc.)

## 📁 Vercel Deployment Settings

### Build Configuration (in `vercel.json`)
- Build Command: `npm run build`
- Output Directory: `dist`
- Framework: `vite`

### Domain Configuration
- Primary Domain: `247locksmithandsecurity.com`
- All schema markup and internal links configured for this domain

## 🔒 Security Configuration

### Headers (Configured in `vercel.json`)
- Content Security Policy: Tightened for better security
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: enabled
- Referrer Policy: strict-origin-when-cross-origin

### Service Worker
- Caches critical assets for performance
- Configured to bypass analytics domains
- Cache version: v7 (latest)

## 🚀 Performance Optimizations

### Static Assets Caching
- Images, CSS, JS: 1 year cache
- HTML: No cache (for updates)
- Sitemap/robots: 1 day cache

### Image Optimization
- All icons use PNG format
- Service worker preloads critical images
- Lazy loading implemented for non-critical images

## 📊 SEO Configuration

### Sitemaps
- Main sitemap: `/sitemap.xml`
- Services sitemap: `/sitemap-services.xml`
- Locations sitemap: `/sitemap-locations.xml`
- All registered in `robots.txt`

### Meta Tags & Schema
- Comprehensive meta tag implementation
- JSON-LD structured data for all pages
- Open Graph and Twitter Card tags
- Local business schema markup

## ⚠️ Action Items Before Go-Live

### High Priority
1. **Cloudflare Analytics**: Replace commented token with actual token
2. **Email Service**: Set up email handling for contact forms
3. **SSL Certificate**: Ensure HTTPS is properly configured
4. **DNS Configuration**: Point domain to Vercel

### Medium Priority
1. **Monitor Core Web Vitals**: Performance monitoring is already implemented
2. **Test Contact Forms**: Ensure form submissions work
3. **Verify Redirects**: Test all URL patterns in `/public/_redirects`

## 🧪 Testing Checklist

### Before Deployment
- [ ] Build succeeds locally: `npm run build`
- [ ] All images load correctly
- [ ] No 404 errors on sitemaps
- [ ] Contact forms functional
- [ ] Analytics tracking works

### After Deployment
- [ ] All pages load without errors
- [ ] Sitemaps accessible and valid
- [ ] Search Console verification
- [ ] Performance audit (Lighthouse)
- [ ] Mobile responsiveness test

## 📈 Post-Launch Monitoring

### Analytics Setup
- Google Analytics 4 (configured)
- Google Tag Manager (configured)
- Microsoft Clarity (configured)
- Cloudflare Analytics (needs token)

### SEO Monitoring
- Submit sitemaps to Google Search Console
- Monitor Core Web Vitals
- Track keyword rankings
- Monitor structured data errors

## 🔍 Technical Notes

### Framework Details
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Maps**: Google Maps API
- **Database**: Supabase
- **Analytics**: Multi-platform tracking

### File Structure
- Source: `/src/`
- Public assets: `/public/lovable-uploads/`
- Build output: `/dist/`
- Configuration: `vite.config.ts`, `vercel.json`

This configuration ensures optimal performance, security, and SEO for the locksmith website deployment on Vercel.