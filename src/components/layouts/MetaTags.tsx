import React from "react";
import BasicMetaTags from "../meta/BasicMetaTags";
import OpenGraphTags from "../meta/OpenGraphTags";
import TwitterTags from "../meta/TwitterTags";
import BusinessInfoTags from "../meta/BusinessInfoTags";
import { createLocalBusinessSchema } from "@/schemas/localBusinessSchema";
import { createOfferCatalogSchema } from "@/schemas/offerCatalogSchema";
import { createReviewSchema } from "@/schemas/reviewSchema";
import { createBreadcrumbSchema } from "@/schemas/breadcrumbSchema";
import { createFAQSchema } from "@/schemas/faqSchema";
import { Helmet } from "react-helmet";

interface MetaTagsProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string;
  schema?: object;
  breadcrumbs?: Array<{ name: string; item: string }>;
  faqSchema?: Array<{ question: string; answer: string }>;
  alternateLanguages?: Array<{ hrefLang: string; href: string }>;
  publishedTime?: string;
  modifiedTime?: string;
  type?: string;
}

const MetaTags = ({
  title,
  description,
  canonicalUrl,
  ogImage = "/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png",
  keywords,
  schema,
  breadcrumbs,
  faqSchema,
  alternateLanguages,
  publishedTime,
  modifiedTime,
  type = "website"
}: MetaTagsProps) => {
  const baseUrl = "https://247locksmithandsecurity.com";
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

  const localBusinessSchema = createLocalBusinessSchema({
    baseUrl,
    description,
    ogImage
  });

  const defaultSchema = {
    ...localBusinessSchema,
    hasOfferCatalog: createOfferCatalogSchema(),
    ...createReviewSchema()
  };

  return (
    <>
      <BasicMetaTags
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        baseUrl={baseUrl}
      />

      <OpenGraphTags
        title={title}
        description={description}
        ogImage={ogImage}
        baseUrl={baseUrl}
        canonicalUrl={fullCanonicalUrl}
        type={type}
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
      />

      <TwitterTags
        title={title}
        description={description}
        image={ogImage}
        baseUrl={baseUrl}
      />

      <BusinessInfoTags />

      <Helmet>
        {alternateLanguages?.map(({ hrefLang, href }) => (
          <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
        ))}

        <script type="application/ld+json">
          {JSON.stringify(schema || defaultSchema)}
        </script>

        {breadcrumbs && (
          <script type="application/ld+json">
            {JSON.stringify(createBreadcrumbSchema(breadcrumbs))}
          </script>
        )}

        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(createFAQSchema(faqSchema))}
          </script>
        )}
      </Helmet>
    </>
  );
};

export default MetaTags;