
interface BlogPostSchemaProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  publisherName?: string;
  publisherLogo?: string;
  categories?: string[];
  tags?: string[];
}

export const createBlogPostSchema = ({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName = "Locksmith & Security LLC",
  publisherName = "Locksmith & Security LLC",
  publisherLogo = "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
  categories = ["Locksmith", "Security"],
  tags = []
}: BlogPostSchemaProps) => {
  
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "headline": title,
    "description": description,
    "image": imageUrl,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": publisherName,
      "logo": {
        "@type": "ImageObject",
        "url": publisherLogo,
        "width": 600,
        "height": 60
      }
    },
    "keywords": tags.join(", "),
    "articleSection": categories.join(", ")
  };
  
  return {
    type: 'BlogPosting',
    data: blogPostSchema
  };
};
