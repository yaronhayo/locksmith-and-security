import React, { ReactElement, JSXElementConstructor } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  heroTitle?: string;
  heroDescription?: string;
  schema?: object;
}

const PageLayout = ({
  title,
  description,
  children,
  className,
  heroTitle,
  heroDescription,
  schema,
}: PageLayoutProps) => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": "Locksmith & Security LLC"
    },
    ...schema
  };

  // Check if the first child is HeroSection with proper type checking
  const childrenArray = React.Children.toArray(children);
  const firstChild = childrenArray[0] as ReactElement<any, string | JSXElementConstructor<any>>;
  const hasHeroSection = 
    typeof firstChild?.type === 'function' && 
    (firstChild.type.displayName === 'HeroSection' || firstChild.type.name === 'HeroSection');

  return (
    <>
      <Helmet>
        <title>{title} | Locksmith & Security LLC</title>
        <meta name="description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        {(heroTitle || heroDescription) && (
          <div className="hero-gradient py-12">
            <div className="container mx-auto px-4">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-white text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {heroTitle || title}
              </motion.h1>
              <motion.p 
                className="text-xl text-white/90 text-center max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {heroDescription || description}
              </motion.p>
            </div>
          </div>
        )}
        <motion.main 
          className={cn("flex-grow", !hasHeroSection && "pt-20")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className={cn(className)}>{children}</div>
        </motion.main>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;