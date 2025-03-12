
import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = lazy(() => import('@/components/FAQ'));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const FaqCallToAction = () => (
  <motion.div
    className="mt-12 text-center"
    variants={itemVariants}
  >
    <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
      If you couldn't find the answer you were looking for, please don't hesitate to contact us directly.
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link
        to="/contact"
        className={cn(buttonVariants({ variant: "default" }), "bg-secondary hover:bg-secondary-hover")}
      >
        Contact Us
      </Link>
      <a
        href="tel:2017482070"
        className={cn(buttonVariants({ variant: "outline" }), "border-secondary text-secondary hover:bg-secondary/10")}
      >
        <PhoneCall className="w-4 h-4 mr-2" />
        <span>(201) 748-2070</span>
      </a>
    </div>
  </motion.div>
);

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our locksmith services
          </p>
          <Separator className="mt-8 max-w-md mx-auto" />
        </motion.div>
        
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Suspense fallback={
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="rounded-lg border p-4">
                  <Skeleton className="h-7 w-3/4 mb-4" />
                  <Skeleton className="h-20 w-full" />
                </div>
              ))}
            </div>
          }>
            <FAQ />
          </Suspense>
          
          <FaqCallToAction />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
