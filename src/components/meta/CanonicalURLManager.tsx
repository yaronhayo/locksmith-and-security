
import React from 'react';
import { Helmet } from 'react-helmet';

interface CanonicalURLManagerProps {
  url: string;
  baseUrl?: string;
  isPaginated?: boolean;
  currentPage?: number;
  totalPages?: number;
  noIndex?: boolean;
}

const CanonicalURLManager: React.FC<CanonicalURLManagerProps> = ({
  url,
  baseUrl = "https://247locksmithandsecurity.com",
  isPaginated = false,
  currentPage = 1,
  totalPages = 1,
  noIndex = false
}) => {
  // Ensure URL is absolute
  const absoluteUrl = url.startsWith('http') 
    ? url 
    : `${baseUrl}${url.startsWith('/') ? url : `/${url}`}`;

  // Extract the base URL without pagination parameters for paginated content
  const getBaseUrl = () => {
    if (!isPaginated) return absoluteUrl;
    
    // Remove any pagination query parameters
    const urlObj = new URL(absoluteUrl);
    urlObj.searchParams.delete('page');
    urlObj.searchParams.delete('p');
    
    return urlObj.toString();
  };

  const canonicalBase = getBaseUrl();
  
  // Generate pagination URLs
  const prevUrl = currentPage > 1 
    ? `${canonicalBase}${canonicalBase.includes('?') ? '&' : '?'}page=${currentPage - 1}`
    : null;
    
  const nextUrl = currentPage < totalPages 
    ? `${canonicalBase}${canonicalBase.includes('?') ? '&' : '?'}page=${currentPage + 1}`
    : null;

  return (
    <Helmet>
      {/* Canonical URL */}
      <link rel="canonical" href={isPaginated && currentPage === 1 ? canonicalBase : absoluteUrl} />
      
      {/* Pagination links */}
      {isPaginated && prevUrl && <link rel="prev" href={prevUrl} />}
      {isPaginated && nextUrl && <link rel="next" href={nextUrl} />}
      
      {/* Prevent indexing of paginated content except first page */}
      {(noIndex || (isPaginated && currentPage > 1)) && (
        <meta name="robots" content="noindex, follow" />
      )}
    </Helmet>
  );
};

export default CanonicalURLManager;
