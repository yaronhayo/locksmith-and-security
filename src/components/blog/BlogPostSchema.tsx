
import React from 'react';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { createBlogPostSchema } from '@/components/meta/schema/BlogPostSchema';

interface BlogPostSchemaProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  categories?: string[];
  tags?: string[];
}

const BlogPostSchema: React.FC<BlogPostSchemaProps> = ({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified = new Date().toISOString(),
  authorName = "Locksmith & Security LLC",
  categories = ["Locksmith", "Security"],
  tags = []
}) => {
  const schema = createBlogPostSchema({
    title,
    description,
    url,
    imageUrl,
    datePublished,
    dateModified,
    authorName,
    categories,
    tags
  });

  return <SchemaScripts schemas={[schema]} />;
};

export default BlogPostSchema;
