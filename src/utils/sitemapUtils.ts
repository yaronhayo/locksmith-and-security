
/**
 * Utility functions for generating and managing sitemaps
 */

interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  images?: Array<{url: string; title?: string; caption?: string}>;
}

/**
 * Formats a date for sitemap XML files
 * @param date Date to format (defaults to current date)
 * @returns Formatted date string in YYYY-MM-DD format
 */
export const formatSitemapDate = (date: Date = new Date()): string => {
  return date.toISOString().split('T')[0];
};

/**
 * Generates XML content for a sitemap entry
 * @param entry The sitemap entry data
 * @param baseUrl The base URL of the site
 * @returns Formatted XML string for the entry
 */
export const generateSitemapEntry = (entry: SitemapEntry, baseUrl: string): string => {
  const fullUrl = entry.url.startsWith('http') 
    ? entry.url 
    : `${baseUrl}${entry.url.startsWith('/') ? entry.url : `/${entry.url}`}`;
    
  let xml = '  <url>\n';
  xml += `    <loc>${fullUrl}</loc>\n`;
  
  if (entry.lastmod) {
    xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
  }
  
  if (entry.changefreq) {
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
  }
  
  if (entry.priority !== undefined) {
    xml += `    <priority>${entry.priority.toFixed(1)}</priority>\n`;
  }
  
  // Add image entries if available
  if (entry.images && entry.images.length > 0) {
    entry.images.forEach(image => {
      const imageUrl = image.url.startsWith('http') 
        ? image.url 
        : `${baseUrl}${image.url.startsWith('/') ? image.url : `/${image.url}`}`;
        
      xml += '    <image:image>\n';
      xml += `      <image:loc>${imageUrl}</image:loc>\n`;
      if (image.title) {
        xml += `      <image:title>${image.title}</image:title>\n`;
      }
      if (image.caption) {
        xml += `      <image:caption>${image.caption}</image:caption>\n`;
      }
      xml += '    </image:image>\n';
    });
  }
  
  xml += '  </url>\n';
  return xml;
};

/**
 * Generates a complete sitemap XML file content
 * @param entries Array of sitemap entries
 * @param baseUrl The base URL of the site
 * @returns Complete XML sitemap content
 */
export const generateCompleteSitemap = (entries: SitemapEntry[], baseUrl: string): string => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n';
  xml += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
  xml += '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n\n';
  
  entries.forEach(entry => {
    xml += generateSitemapEntry(entry, baseUrl);
  });
  
  xml += '</urlset>';
  return xml;
};

/**
 * Creates entries for a sitemap index file
 * @param sitemaps Array of sitemap URLs
 * @param baseUrl The base URL of the site
 * @returns XML content for a sitemap index file
 */
export const generateSitemapIndex = (sitemaps: {url: string; lastmod?: string}[], baseUrl: string): string => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  sitemaps.forEach(sitemap => {
    const fullUrl = sitemap.url.startsWith('http') 
      ? sitemap.url 
      : `${baseUrl}${sitemap.url.startsWith('/') ? sitemap.url : `/${sitemap.url}`}`;
      
    xml += '  <sitemap>\n';
    xml += `    <loc>${fullUrl}</loc>\n`;
    if (sitemap.lastmod) {
      xml += `    <lastmod>${sitemap.lastmod}</lastmod>\n`;
    }
    xml += '  </sitemap>\n';
  });
  
  xml += '</sitemapindex>';
  return xml;
};
