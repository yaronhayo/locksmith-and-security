import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";
import { Analytics } from '@vercel/analytics/react';
import MetaTags from "./MetaTags";
import PageHero from "./PageHero";
import PageLoading from "./PageLoading";

export interface PageLayoutProps {
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
  breadcrumbs?: Array<{ name: string; item: string }>;
  faqSchema?: Array<{ question: string; answer: string }>;
  alternateLanguages?: Array<{ hrefLang: string; href: string }>;
  publishedTime?: string;
  modifiedTime?: string;
  type?: string;
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
      <MetaTags
        title={title}
        description={description}
        schema={schema}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
        keywords={keywords}
      />
      
      {hasHeroSection && (
        <PageHero 
          title={heroTitle || title}
          description={heroDescription || description}
        />
      )}
      
      <motion.div 
        className={cn("flex-grow", !hasHeroSection && "pt-0")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        role="main"
      >
        <div className={cn(className)}>{children}</div>
      </motion.div>
      <Analytics />
    </ErrorBoundary>
  );
};

export default PageLayout;