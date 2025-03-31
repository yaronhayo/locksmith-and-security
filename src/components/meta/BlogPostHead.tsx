
import React from 'react';
import SEOHead from './SEOHead';
import { createBlogPostSchema } from './schema/BlogPostSchema';
import { SchemaData } from '@/types/schema';

interface BlogPostHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  datePublished: string;
  dateModified?: string;
  keywords?: string;
  authorName?: string;
  categories?: string[];
  tags?: string[];
  noindex?: boolean;
}

const BlogPostHead: React.FC<BlogPostHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
  datePublished,
  dateModified = new Date().toISOString(),
  keywords = "",
  authorName = "Locksmith & Security LLC",
  categories = ["Locksmith", "Security"],
  tags = [],
  noindex = false
}) => {
  const baseUrl = "https://247locksmithandsecurity.com";
  
  // Ensure canonical URL is absolute
  const fullCanonicalUrl = canonicalUrl.startsWith('http') 
    ? canonicalUrl 
    : `${baseUrl}${canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`}`;

  // Ensure image URL is absolute
  const fullImageUrl = ogImage && !ogImage.startsWith('http') 
    ? `${baseUrl}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}` 
    : ogImage;
  
  // Build schema for blog post
  const schemas: SchemaData[] = [
    createBlogPostSchema({
      title,
      description,
      url: fullCanonicalUrl,
      imageUrl: fullImageUrl,
      datePublished,
      dateModified,
      authorName,
      categories,
      tags
    })
  ];

  return (
    <SEOHead
      title={title}
      description={description}
      canonicalUrl={fullCanonicalUrl}
      schemas={schemas}
      ogImage={ogImage}
      keywords={keywords}
      noindex={noindex}
      nofollow={false}
      modifiedDate={dateModified}
      publishedDate={datePublished}
      ogType="article"
      twitterCardType="summary_large_image"
      baseUrl={baseUrl}
      author={authorName}
    />
  );
};

export default BlogPostHead;
