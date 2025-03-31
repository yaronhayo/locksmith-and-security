
import { generateCompleteSitemap, generateSitemapIndex, formatSitemapDate } from './sitemapUtils';

// Define common sitemap properties
const baseUrl = "https://247locksmithandsecurity.com";
const currentDate = formatSitemapDate();

// Generate service area sitemap entries
export const generateServiceAreaSitemap = (serviceAreas: {slug: string, name: string}[]) => {
  const entries = serviceAreas.map(area => ({
    url: `/service-areas/${area.slug}`,
    lastmod: currentDate,
    changefreq: 'monthly' as const,
    priority: 0.8,
    images: [{
      url: `/images/locations/${area.slug}.jpg`,
      title: `${area.name} Locksmith Services`,
      caption: `Professional locksmith services in ${area.name}, NJ`
    }]
  }));

  return generateCompleteSitemap(entries, baseUrl);
};

// Generate services sitemap entries
export const generateServicesSitemap = (services: {slug: string, category: string, name: string}[]) => {
  const entries = services.map(service => ({
    url: `/services/${service.category}/${service.slug}`,
    lastmod: currentDate,
    changefreq: 'monthly' as const,
    priority: 0.8,
    images: [{
      url: `/images/services/${service.slug}.jpg`,
      title: `${service.name} Service`,
      caption: `Professional ${service.name} locksmith service`
    }]
  }));

  return generateCompleteSitemap(entries, baseUrl);
};

// Generate main sitemap entries for core pages
export const generateMainSitemap = () => {
  const entries = [
    { url: '/', lastmod: currentDate, changefreq: 'weekly' as const, priority: 1.0 },
    { url: '/about', lastmod: currentDate, changefreq: 'monthly' as const, priority: 0.7 },
    { url: '/contact', lastmod: currentDate, changefreq: 'monthly' as const, priority: 0.8 },
    { url: '/services', lastmod: currentDate, changefreq: 'weekly' as const, priority: 0.9 },
    { url: '/service-areas', lastmod: currentDate, changefreq: 'weekly' as const, priority: 0.9 },
    { url: '/faq', lastmod: currentDate, changefreq: 'monthly' as const, priority: 0.6 },
    { url: '/reviews', lastmod: currentDate, changefreq: 'monthly' as const, priority: 0.6 },
    { url: '/book-online', lastmod: currentDate, changefreq: 'monthly' as const, priority: 0.8 },
    { url: '/privacy-policy', lastmod: currentDate, changefreq: 'yearly' as const, priority: 0.3 },
    { url: '/terms-conditions', lastmod: currentDate, changefreq: 'yearly' as const, priority: 0.3 },
  ];

  return generateCompleteSitemap(entries, baseUrl);
};

// Generate sitemap index file
export const generateSitemapIndexFile = () => {
  const sitemaps = [
    { url: '/sitemap.xml', lastmod: currentDate },
    { url: '/sitemap-services.xml', lastmod: currentDate },
    { url: '/sitemap-locations.xml', lastmod: currentDate },
  ];

  return generateSitemapIndex(sitemaps, baseUrl);
};
