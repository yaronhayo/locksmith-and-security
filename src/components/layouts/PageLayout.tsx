import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";
import MetaTags from "./MetaTags";
import PageHero from "./PageHero";
import PageLoading from "./PageLoading";
import { createBreadcrumbSchema } from "../meta/schema/BreadcrumbSchema";
import { createLocalBusinessSchema } from "../meta/schema/LocalBusinessSchema";
import { createWebSiteSchema } from "../meta/schema/WebSiteSchema";

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
  ogType?: "website" | "article" | "product" | "profile" | "book";
  geoRegion?: string;
  geoPlaceName?: string;
  geoPosition?: string;
  icbm?: string;
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
  ogType = "website",
  geoRegion,
  geoPlaceName,
  geoPosition,
  icbm,
}: PageLayoutProps) => {
  if (isLoading) {
    return <PageLoading />;
  }

  const allSchemas = [...schemas];
  if (schema) {
    allSchemas.push({ type: 'schema', data: schema });
  }
  
  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = createBreadcrumbSchema({ breadcrumbs });
    allSchemas.push(breadcrumbSchema);
  }
  
  const localBusinessSchema = createLocalBusinessSchema();
  allSchemas.push(localBusinessSchema);
  
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
        geoRegion={geoRegion}
        geoPlaceName={geoPlaceName}
        geoPosition={geoPosition}
        icbm={icbm}
      />
      
      {(heroTitle || heroDescription) && (
        <PageHero 
          title={heroTitle || title}
          description={heroDescription || description}
        />
      )}
      
      <motion.div 
        className={cn("flex-grow", !(heroTitle || heroDescription) && "pt-0")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        role="main"
      >
        <div className={cn(className)}>{children}</div>
      </motion.div>
    </ErrorBoundary>
  );
};

export default PageLayout;
