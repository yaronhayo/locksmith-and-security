
import { motion } from "framer-motion";

const VehicleBrands = () => {
  const brands = [
    "Toyota", "Honda", "Ford", "Chevrolet",
    "BMW", "Mercedes", "Audi", "Volkswagen",
    "Nissan", "Hyundai", "Kia", "Lexus",
    "Jeep", "Dodge", "Chrysler", "And more..."
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {brands.map((brand, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.05 }}
          className="text-center p-2 bg-gray-50 rounded-lg"
        >
          {brand}
        </motion.div>
      ))}
    </div>
  );
};

export default VehicleBrands;
