
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer L.",
    location: "North Bergen",
    text: "Their locksmith was professional, courteous, and efficient. The service exceeded my expectations, and I felt completely at ease. I highly recommend their services!",
    rating: 5
  },
  {
    name: "Mark S.",
    location: "Jersey City",
    text: "They installed a comprehensive security system for my business. The quality of work was exceptional, and their team was knowledgeable about all the latest security technologies.",
    rating: 5
  },
  {
    name: "Amanda W.",
    location: "Hoboken",
    text: "After losing my car keys, I was worried about the hassle of replacement. Their team made the process smooth and stress-free. Outstanding service and great attention to detail!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-t from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary relative inline-block">
            What Our Clients Say
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/30"></span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Don't just take our word for it — here's what our satisfied customers have to say.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-8 relative"
            >
              <div className="absolute -top-4 -left-4 bg-primary rounded-full w-12 h-12 flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-600">
            Read more reviews on <a href="#" className="text-primary font-medium hover:underline">Google</a> and <a href="#" className="text-primary font-medium hover:underline">Yelp</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
