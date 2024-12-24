import React from 'react';
import PageLayout from "@/components/layouts/PageLayout";
import HeroContent from "@/components/home/HeroContent";
import MainContent from "@/components/home/MainContent";
import { getHomeSchema } from "@/components/home/HomeSchema";

const Index = () => {
  return (
    <PageLayout
      title="24/7 Locksmith Services in North Bergen"
      description="Professional locksmith services in North Bergen. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response and reliable service."
      schema={getHomeSchema()}
      keywords="locksmith, emergency locksmith, car lockout, house lockout, business lockout, lock change, lock rekey, North Bergen locksmith"
    >
      <HeroContent />
      <MainContent />
    </PageLayout>
  );
};

export default Index;