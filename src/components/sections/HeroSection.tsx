import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-primary to-primary/80 pt-32 pb-20">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-white">
            <div className="flex items-center space-x-2 bg-secondary/90 text-white px-4 py-2 rounded-full w-fit">
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium">Trusted by 1000+ customers</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              24/7 Emergency Locksmith Services in North Bergen
            </h1>
            <p className="text-xl opacity-90">
              Professional, reliable, and fast locksmith services when you need them most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:5513037874">Call Now</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20" asChild>
                <a href="/services">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 bg-white rounded-lg p-8 shadow-xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Request Service</h2>
              <p className="text-gray-600">Get a quick response from our team</p>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
              <textarea
                placeholder="How can we help you?"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                required
              ></textarea>
              <Button type="submit" className="w-full" size="lg">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;