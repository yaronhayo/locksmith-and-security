import { ServiceCategory } from "@/types/reviews";
import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";
interface ReviewsHeaderProps {
  totalReviews: number;
  location?: string;
  category?: ServiceCategory;
}
const getCategoryTitle = (category?: ServiceCategory) => {
  switch (category) {
    case 'car':
      return 'Car Locksmith';
    case 'residential':
      return 'Residential Locksmith';
    case 'commercial':
      return 'Commercial Locksmith';
    default:
      return '';
  }
};
const ReviewsHeader = ({
  totalReviews,
  location,
  category
}: ReviewsHeaderProps) => {
  let title = "Customer Reviews";
  if (location && category) {
    title = `${getCategoryTitle(category)} Reviews in ${location}`;
  } else if (location) {
    title = `Reviews in ${location}`;
  } else if (category) {
    title = `${getCategoryTitle(category)} Reviews`;
  }
  return <motion.div className="text-center mb-12" initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} viewport={{
    once: true
  }}>
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      
      <p className="text-gray-600 max-w-2xl mx-auto">
        {location ? `Read what our customers in ${location} have to say about our professional locksmith services.` : "Read what our satisfied customers have to say about our professional locksmith services."}
      </p>
      
      {totalReviews > 0 && <motion.div className="flex items-center justify-center gap-2 mt-6" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.3,
      duration: 0.5
    }}>
          <div className="flex">
            {[1, 2, 3, 4, 5].map(star => {})}
          </div>
          
        </motion.div>}
    </motion.div>;
};
export default ReviewsHeader;