
import { format } from 'date-fns';

// Define route structure
interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

// Interface for sitemap URL entry
interface SitemapUrl {
  path: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

// Priority mapping for different types of pages
const PRIORITY_MAP = {
  home: 1.0,
  serviceCategory: 0.9,
  service: 0.8,
  serviceArea: 0.8,
  mainPage: 0.8,
  supportPage: 0.3,
};

// Change frequency mapping
const CHANGEFREQ_MAP = {
  home: 'daily',
  serviceCategory: 'weekly',
  service: 'weekly',
  serviceArea: 'weekly',
  mainPage: 'monthly',
  supportPage: 'monthly',
} as const;

/**
 * Get the sitemap URL configuration for a path
 */
function getSitemapUrlConfig(path: string): SitemapUrl {
  const today = format(new Date(), 'yyyy-MM-dd');
  
  // Default values
  let priority = 0.5;
  let changefreq: SitemapUrl['changefreq'] = 'weekly';
  
  // Determine priority and change frequency based on path
  if (path === '/') {
    priority = PRIORITY_MAP.home;
    changefreq = CHANGEFREQ_MAP.home;
  } else if (path.startsWith('/services') && path.split('/').length === 3) {
    priority = PRIORITY_MAP.serviceCategory;
    changefreq = CHANGEFREQ_MAP.serviceCategory;
  } else if (path.startsWith('/services') && path.split('/').length > 3) {
    priority = PRIORITY_MAP.service;
    changefreq = CHANGEFREQ_MAP.service;
  } else if (path.startsWith('/service-areas') && path.split('/').length > 2) {
    priority = PRIORITY_MAP.serviceArea;
    changefreq = CHANGEFREQ_MAP.serviceArea;
  } else if (['/about', '/contact', '/reviews', '/book-online', '/service-areas'].includes(path)) {
    priority = PRIORITY_MAP.mainPage;
    changefreq = CHANGEFREQ_MAP.mainPage;
  } else if (['/privacy-policy', '/terms-conditions', '/sitemap'].includes(path)) {
    priority = PRIORITY_MAP.supportPage;
    changefreq = CHANGEFREQ_MAP.supportPage;
  }
  
  return {
    path,
    lastmod: today,
    changefreq,
    priority,
  };
}

/**
 * Generate the sitemap XML content - uses the existing static sitemap routes when building 
 * since we cannot import the routes directly in the build process
 */
export function generateSitemapXml(baseUrl: string = 'https://247locksmithandsecurity.com'): string {
  // For build process, use existing static routes from predefined list
  const staticRoutes = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/reviews',
    '/faq',
    '/book-online',
    '/service-areas',
    '/privacy-policy',
    '/terms-conditions',
    '/sitemap',
    '/services/emergency-locksmith',
    '/services/residential-locksmith',
    '/services/commercial-locksmith',
    '/services/auto-locksmith',
    '/services/emergency-locksmith/car-lockout',
    '/services/emergency-locksmith/house-lockout',
    '/services/emergency-locksmith/business-lockout',
    '/services/emergency-locksmith/storage-unit-lockout',
    '/services/residential-locksmith/lock-replacement',
    '/services/residential-locksmith/lock-rekey',
    '/services/residential-locksmith/lock-repair',
    '/services/residential-locksmith/gate-locks',
    '/services/commercial-locksmith/lock-replacement',
    '/services/commercial-locksmith/lock-rekey',
    '/services/commercial-locksmith/emergency-exit-device',
    '/services/commercial-locksmith/master-key',
    '/services/commercial-locksmith/access-control',
    '/services/auto-locksmith/car-key-replacement',
    '/services/auto-locksmith/key-fob-programming',
    '/services/auto-locksmith/car-key-duplicate',
    '/services/auto-locksmith/car-key-cutting',
    '/services/auto-locksmith/ignition-lock-cylinder',
    '/service-areas/north-bergen',
    '/service-areas/union-city',
    '/service-areas/west-new-york',
    '/service-areas/guttenberg',
    '/service-areas/weehawken',
    '/service-areas/jersey-city',
    '/service-areas/hoboken',
    '/service-areas/secaucus'
  ];
  
  // Filter out dynamic routes, 404 page and non-page routes
  const validRoutes = staticRoutes.filter(path => 
    path && 
    !path.includes('*') && 
    !path.includes(':')
  );
  
  // Remove duplicates
  const uniqueRoutes = Array.from(new Set(validRoutes));
  
  // Generate sitemap URLs
  const sitemapUrls = uniqueRoutes.map(path => getSitemapUrlConfig(path));
  
  // Generate XML
  const urlElements = sitemapUrls.map(({ path, lastmod, changefreq, priority }) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`).join('');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlElements}
</urlset>`;
}

/**
 * Write sitemap to file (for build process)
 */
export async function writeSitemapToFile(outputPath: string): Promise<void> {
  try {
    const sitemap = generateSitemapXml();
    // In a build process, you would write this to a file
    console.log(`Successfully generated sitemap with ${sitemap.split('<url>').length - 1} URLs`);
    return;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    throw error;
  }
}
