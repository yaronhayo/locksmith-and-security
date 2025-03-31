
// Utility functions for sitemap generation

// Format date to sitemap format (YYYY-MM-DD)
export const formatSitemapDate = (date = new Date()): string => {
  return date.toISOString().split('T')[0];
};

interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  images?: Array<{
    url: string;
    title?: string;
    caption?: string;
    geo_location?: string;
    license?: string;
  }>;
}

interface SitemapIndexEntry {
  url: string;
  lastmod?: string;
}

// Generate a complete sitemap XML string
export const generateCompleteSitemap = (entries: SitemapEntry[], baseUrl: string): string => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n`;

  entries.forEach(entry => {
    // Ensure URL is absolute
    const absoluteUrl = entry.url.startsWith('http') 
      ? entry.url 
      : `${baseUrl}${entry.url.startsWith('/') ? entry.url : `/${entry.url}`}`;
    
    xml += `  <url>\n`;
    xml += `    <loc>${absoluteUrl}</loc>\n`;
    
    if (entry.lastmod) {
      xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    }
    
    if (entry.changefreq) {
      xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    }
    
    if (entry.priority !== undefined) {
      xml += `    <priority>${entry.priority.toFixed(1)}</priority>\n`;
    }
    
    if (entry.images && entry.images.length > 0) {
      entry.images.forEach(image => {
        // Ensure image URL is absolute
        const absoluteImageUrl = image.url.startsWith('http') 
          ? image.url 
          : `${baseUrl}${image.url.startsWith('/') ? image.url : `/${image.url}`}`;
        
        xml += `    <image:image>\n`;
        xml += `      <image:loc>${absoluteImageUrl}</image:loc>\n`;
        
        if (image.title) {
          xml += `      <image:title>${image.title}</image:title>\n`;
        }
        
        if (image.caption) {
          xml += `      <image:caption>${image.caption}</image:caption>\n`;
        }
        
        if (image.geo_location) {
          xml += `      <image:geo_location>${image.geo_location}</image:geo_location>\n`;
        }
        
        if (image.license) {
          xml += `      <image:license>${image.license}</image:license>\n`;
        }
        
        xml += `    </image:image>\n`;
      });
    }
    
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;
  return xml;
};

// Generate a sitemap index XML string
export const generateSitemapIndex = (sitemaps: SitemapIndexEntry[], baseUrl: string): string => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  sitemaps.forEach(sitemap => {
    // Ensure URL is absolute
    const absoluteUrl = sitemap.url.startsWith('http') 
      ? sitemap.url 
      : `${baseUrl}${sitemap.url.startsWith('/') ? sitemap.url : `/${sitemap.url}`}`;
    
    xml += `  <sitemap>\n`;
    xml += `    <loc>${absoluteUrl}</loc>\n`;
    
    if (sitemap.lastmod) {
      xml += `    <lastmod>${sitemap.lastmod}</lastmod>\n`;
    }
    
    xml += `  </sitemap>\n`;
  });

  xml += `</sitemapindex>`;
  return xml;
};
