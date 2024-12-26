import PageLayout from "@/components/layouts/PageLayout";
import { Button } from "@/components/ui/button";
import { FileQuestion, Key, LockKeyhole, Search } from "lucide-react";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <PageLayout
      title="Page Not Found"
      description="The page you're looking for seems to be locked away. Don't worry, we're experts at handling locked situations!"
    >
      <div className="min-h-[70vh] flex items-center justify-center p-4 bg-gradient-to-b from-transparent to-blue-50/30">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Animated Lock and Key */}
          <div className="relative h-32 mb-8">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="absolute left-1/2 -translate-x-1/2"
            >
              <LockKeyhole className="w-20 h-20 text-primary" />
            </motion.div>
            <motion.div
              initial={{ x: -100, rotate: 0 }}
              animate={{ 
                x: [null, 0],
                rotate: [0, -45, 0],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3.5
              }}
              className="absolute left-1/2 top-1/2 -translate-y-1/2"
            >
              <Key className="w-16 h-16 text-secondary" />
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