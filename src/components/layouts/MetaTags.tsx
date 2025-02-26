import Head from 'next/head';

interface MetaTagsProps {
  title?: string;
  description?: string;
}

const MetaTags = ({ 
  title = "24/7 Locksmith Services in North Bergen, NJ",
  description = "Professional locksmith services in North Bergen. Fast response, reliable service for residential, commercial & automotive needs. Available 24/7."
}: MetaTagsProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://www.example.com/" />
      {/* <meta property="og:image" content="URL to your image" /> */}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {/* <meta property="twitter:image" content="URL to your image" /> */}
    </Head>
  );
};

export default MetaTags;
