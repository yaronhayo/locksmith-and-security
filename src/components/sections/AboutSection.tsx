import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Your Trusted Local Locksmith</h2>
          <p className="text-lg text-gray-600 mb-8">
            With years of experience serving North Bergen and surrounding areas, we provide professional locksmith services for residential, commercial, and automotive needs.
          </p>
          <Button asChild className="group">
            <a href="/about">
              Learn More About Us 
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};