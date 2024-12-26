import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";
import { Analytics } from '@vercel/analytics/react';
import MetaTags from "./MetaTags";
import PageHero from "./PageHero";
import PageLoading from "./PageLoading";
import SkipLink from "@/components/SkipLink";

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
  ogImage,
  keywords,
  isLoading = false,
}: PageLayoutProps) => {
  const hasHeroSection = Boolean(heroTitle || heroDescription);

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <SkipLink />
      <MetaTags
        title={title}
        description={description}
        schema={schema}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
        keywords={keywords}
      />
      
      <div role="banner">
        {hasHeroSection && (
          <PageHero 
            title={heroTitle || title}
            description={heroDescription || description}
          />
        )}
      </div>
      
      <motion.main 
        id="main-content"
        className={cn("flex-grow", !hasHeroSection && "pt-0")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <div className={cn(className)}>{children}</div>
      </motion.main>
      <Analytics />
    </ErrorBoundary>
  );
};

export default PageLayout;