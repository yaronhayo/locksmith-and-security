
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Ghost, Home, ArrowLeft, Phone, Construction } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { memo } from "react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <Card className="max-w-md w-full overflow-hidden border-none shadow-xl">
        <CardContent className="p-0">
          <div className="bg-primary/5 p-6 relative overflow-hidden">
            <motion.div 
              className="absolute -right-4 -top-4 text-primary/10"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Ghost size={160} />
            </motion.div>
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-7xl font-extrabold text-primary mb-2">404</h1>
              <p className="text-lg font-medium text-gray-800">Oops! This page has gone ghosting</p>
            </motion.div>
          </div>

          <motion.div 
            className="p-6 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <p className="text-gray-600 mb-2">
                It seems the page you're looking for has disappeared without a trace!
              </p>
              <p className="text-gray-600 mb-4">
                Perhaps it's locked itself out and needs a locksmith too? 🔐
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="grid gap-3"
            >
              <Button onClick={() => navigate(-1)} variant="outline" className="w-full group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </Button>
              
              <Button asChild className="w-full group">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Return Home
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="pt-4 border-t"
            >
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="flex items-center justify-center mb-2 text-sm text-gray-500"
              >
                <Construction className="mr-2 h-4 w-4 text-amber-500" />
                <span>Need to get back in? We can help!</span>
              </motion.div>
              
              <Button asChild variant="secondary" size="lg" className="w-full mt-2">
                <a href="tel:2017482070" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (201) 748-2070
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
};

export default memo(NotFoundPage);
