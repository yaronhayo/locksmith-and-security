
import { Suspense } from 'react';
import PageLayout from "@/components/layouts/PageLayout";
import { homePageSchema } from "@/schemas/homePageSchema";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <PageLayout
      title="24/7 Emergency Locksmith Services in North Bergen, NJ | Licensed & Insured"
      description="Professional locksmith services in North Bergen. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response and reliable service. Licensed (#13VH13153100) & insured."
      schema={homePageSchema}
      keywords="locksmith, emergency locksmith, car lockout, house lockout, business lockout, lock change, lock rekey, North Bergen locksmith, 24/7 locksmith, automotive locksmith, residential locksmith, commercial locksmith"
      ogImage="/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png"
    >
      <Suspense fallback={<div className="min-h-screen" />}>
        {children}
      </Suspense>
    </PageLayout>
  );
};

export default HomeLayout;
