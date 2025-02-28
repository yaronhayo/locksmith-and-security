
import { motion } from "framer-motion";
import { useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import ReviewsCarousel from "@/components/reviews/ReviewsCarousel";
import { reviews } from "@/data/reviewsData";
import CarouselDots from "@/components/reviews/CarouselDots";

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Set up carousel event listeners
  const handleApiChange = (newApi: CarouselApi) => {
    setApi(newApi);
    
    newApi.on("select", () => {
      setCurrent(newApi.selectedScrollSnap());
    });
  };

  // Get a subset of reviews for the carousel
  const featuredReviews = reviews.slice(0, 6);

  return (
    <section>
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary relative inline-block mb-1">
          What Our Clients Say
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-secondary to-secondary/60 mx-auto mb-6"></div>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Don't just take our word for it — here's what our satisfied customers have to say.
        </p>
      </motion.div>
      
      <div 
        className="w-full max-w-7xl mx-auto px-4"
        onMouseEnter={() => api?.scrollTo(current)}
      >
        <ReviewsCarousel reviews={featuredReviews} setApi={handleApiChange} />
        <CarouselDots 
          total={featuredReviews.length} 
          current={current} 
          onDotClick={(index) => api?.scrollTo(index)} 
        />
      </div>
    </section>
  );
};

export default Testimonials;
