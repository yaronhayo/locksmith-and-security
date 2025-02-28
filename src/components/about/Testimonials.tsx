
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer L.",
    location: "North Bergen",
    text: "Their locksmith was professional, courteous, and efficient. The service exceeded my expectations, and I felt completely at ease. I highly recommend their services!",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Mark S.",
    location: "Jersey City",
    text: "They installed a comprehensive security system for my business. The quality of work was exceptional, and their team was knowledgeable about all the latest security technologies.",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Amanda W.",
    location: "Hoboken",
    text: "After losing my car keys, I was worried about the hassle of replacement. Their team made the process smooth and stress-free. Outstanding service and great attention to detail!",
    rating: 5,
    image: "/placeholder.svg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
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
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-8 relative border border-gray-100"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full pointer-events-none"></div>
              
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-primary to-primary/80 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              {/* Content */}
              <div className="pt-2">
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                
                <div className="flex items-center mt-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
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
          viewport={{ once: true }}
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
