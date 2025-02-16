
interface ArticleSchemaProps {
  title: string;
  description: string;
  modifiedDate: string;
  baseUrl: string;
  isArticle: boolean;
  schema?: object;
}

export const createContentSchema = ({ title, description, modifiedDate, baseUrl, isArticle, schema }: ArticleSchemaProps) => ({
  type: isArticle ? 'Article' : 'WebPage',
  data: {
    "@context": "https://schema.org",
    "@type": isArticle ? "Article" : "WebPage",
    "name": title,
    "description": description,
    "dateModified": modifiedDate,
    "isPartOf": {
      "@id": baseUrl
    },
    ...schema
  }
});
