import { Helmet } from "react-helmet";

interface TwitterTagsProps {
  title: string;
  description: string;
  image: string;
  baseUrl: string;
}

const TwitterTags = ({
  title,
  description,
  image,
  baseUrl,
}: TwitterTagsProps) => {
  const fullTitle = `${title} | Locksmith & Security LLC - Professional Locksmith Services in North Bergen, NJ`;

  return (
    <Helmet>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />
      <meta name="twitter:site" content="@247locksmith" />
      <meta name="twitter:creator" content="@247locksmith" />
    </Helmet>
  );
};

export default TwitterTags;