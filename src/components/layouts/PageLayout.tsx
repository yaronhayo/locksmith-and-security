
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";
import MetaTags from "./MetaTags";
import PageHero from "./PageHero";
import PageLoading from "./PageLoading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createBreadcrumbSchema } from "../meta/schema/BreadcrumbSchema";
import { createLocalBusinessSchema } from "../meta/schema/LocalBusinessSchema";
import { createWebSiteSchema } from "../meta/schema/WebSiteSchema";
import ScrollToTopButton from "@/components/ScrollToTopButton";

interface Schema {
  type: string;
  data: object;
}

interface PageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  heroTitle?: string;
  heroDescription?: string;
  schema?: object;
  schemas?: Schema[];
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string;
  isLoading?: boolean;
  noindex?: boolean;
  nofollow?: boolean;
  breadcrumbs?: Array<{name: string, item: string}>;
  customBreadcrumbs?: Array<{name: string, path: string}>;
  ogType?: "website" | "article" | "product" | "profile" | "book";
  hideBreadcrumbs?: boolean;
  modifiedDate?: string;
}

const PageLayout = ({
  title,
  description,
  children,
  className,
  heroTitle,
  heroDescription,
  schema,
  schemas = [],
  canonicalUrl,
  ogImage,
  keywords,
  isLoading = false,
  noindex = false,
  nofollow = false,
  breadcrumbs,
  customBreadcrumbs,
  ogType = "website",
  hideBreadcrumbs = false,
  modifiedDate = new Date().toISOString().split('T')[0],
}: PageLayoutProps) => {
  if (isLoading) {
    return <PageLoading />;
  }

  // Determine if we have a hero section
  const hasHero = Boolean(heroTitle || heroDescription);

  // Add schema to schemas array if provided
  const allSchemas = [...schemas];
  if (schema) {
    allSchemas.push({ type: 'schema', data: schema });
  }
  
  // Add breadcrumb schema if breadcrumbs are provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = createBreadcrumbSchema({ breadcrumbs });
    allSchemas.push(breadcrumbSchema);
  }
  
  // Add default LocalBusiness schema
  const localBusinessSchema = createLocalBusinessSchema();
  allSchemas.push(localBusinessSchema);
  
  // Add default WebSite schema
  const websiteSchema = createWebSiteSchema();
  allSchemas.push(websiteSchema);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <MetaTags
        title={title}
        description={description}
        schemas={allSchemas}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
        keywords={keywords}
        noindex={noindex}
        nofollow={nofollow}
        ogType={ogType}
        modifiedDate={modifiedDate}
      />
      
      {hasHero ? (
        <PageHero 
          title={heroTitle || title}
          description={heroDescription || description}
          showBreadcrumbs={!hideBreadcrumbs}
          customBreadcrumbs={customBreadcrumbs}
        />
      ) : (
        // Only show breadcrumbs here if there's no hero and they're not hidden
        !hideBreadcrumbs && (
          <div className="container mx-auto px-4 py-3 md:py-4">
            <Breadcrumbs 
              items={customBreadcrumbs} 
              showSchema={true}
            />
          </div>
        )
      )}
      
      <motion.main
        className={cn("flex-grow", !hasHero && "pt-0")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        role="main"
        tabIndex={-1}
      >
        <div className={cn(className)}>{children}</div>
      </motion.main>
      
      {/* Scroll to top button */}
      <ScrollToTopButton />
    </ErrorBoundary>
  );
};

export default PageLayout;
