
import PageLayout from "@/components/layouts/PageLayout";
import { Button } from "@/components/ui/button";
import { Key, Search } from "lucide-react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const NotFoundPage = () => {
  return (
    <PageLayout
      title="Page Not Found"
      description="The page you're looking for seems to be locked away. Don't worry, we're experts at handling locked situations!"
    >
      <div className="min-h-[70vh] flex items-center justify-center p-4 bg-gradient-to-b from-transparent to-blue-50/30">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Company Logo Animation */}
          <div className="relative h-32 mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 mx-auto"
            >
              <AspectRatio ratio={1}>
                <img 
                  src="/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png"
                  alt="Locksmith & Security LLC Logo"
                  className="object-contain"
                />
              </AspectRatio>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold text-primary mb-4">
              4<span className="text-secondary">0</span>4
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-heading-primary">
              Looks Like This Page is Locked Out!
            </h2>
            <p className="text-lg text-heading-neutral max-w-xl mx-auto">
              Don't worry! Just like we're experts at unlocking doors, 
              we can help you find your way back to safety.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="gap-2">
              <a href="/">
                <Key className="w-4 h-4" />
                Back to Homepage
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="gap-2">
              <a href="/contact">
                <Search className="w-4 h-4" />
                Need Help?
              </a>
            </Button>
          </div>

          {/* Fun Fact */}
          <div className="mt-12 p-6 bg-white/50 rounded-lg border border-primary/10 backdrop-blur-sm">
            <p className="text-heading-neutral italic">
              "Did you know? The average person spends about 3,680 hours of their lifetime searching for misplaced items. 
              Thankfully, finding our homepage only takes one click!"
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
