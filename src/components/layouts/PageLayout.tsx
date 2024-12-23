import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  heroTitle?: string;
  heroDescription?: string;
}

const PageLayout = ({
  title,
  description,
  children,
  className,
  heroTitle,
  heroDescription,
}: PageLayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title} | Locksmith & Security LLC</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="hero-gradient py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
                {heroTitle || title}
              </h1>
              <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
                {heroDescription || description}
              </p>
            </div>
          </div>
          <div className={cn("py-20", className)}>{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;