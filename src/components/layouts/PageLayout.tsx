import React from "react";
import { Helmet } from "react-helmet";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";
import { Skeleton } from "@/components/ui/skeleton";
import { Analytics } from '@vercel/analytics/react';

interface PageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  heroTitle?: string;
  heroDescription?: string;
  schema?: object;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string;
  isLoading?: boolean;
}

const PageLayout = ({
  title,
  description,
  children,
  className,
  heroTitle,
  heroDescription,
  schema,
  canonicalUrl,
  ogImage = "/og-image.png",
  keywords = "locksmith, security, lock services, emergency locksmith, North Bergen",
  isLoading = false,
}: PageLayoutProps) => {
  const hasHeroSection = Boolean(heroTitle || heroDescription);
  
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Locksmith & Security LLC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://247locksmithandsecurity.com/logo.png"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "North Bergen",
      "addressRegion": "NJ",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7795",
      "longitude": "-74.0324"
    },
    ...schema
  };

  const baseUrl = "https://247locksmithandsecurity.com";
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="h-8 w-3/4 mb-4" />
          <Skeleton className="h-4 w-1/2 mb-8" />
          <div className="grid gap-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-32 w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Helmet>
        <html lang="en" />
        <title>{`${title} | Locksmith & Security LLC`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="canonical" href={fullCanonicalUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={fullCanonicalUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#1E3A8A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="robots" content="index, follow" />
        
        {/* Accessibility Tags */}
        <meta name="apple-mobile-web-app-title" content="Locksmith & Security LLC" />
        <meta name="application-name" content="Locksmith & Security LLC" />
        
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        {hasHeroSection && (
          <div className="hero-gradient py-12 md:py-20" role="banner">
            <div className="container mx-auto px-4">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {heroTitle || title}
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-white/90 text-center max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {heroDescription || description}
              </motion.p>
            </div>
          </div>
        )}
        <motion.main 
          className={cn("flex-grow", !hasHeroSection && "pt-0")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          role="main"
        >
          <div className={cn(className)}>{children}</div>
        </motion.main>
      </div>
      <Analytics />
    </ErrorBoundary>
  );
};

export default PageLayout;