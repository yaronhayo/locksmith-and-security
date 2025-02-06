
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const ServiceComparison = () => {
  const services = [
    {
      feature: "24/7 Emergency Service",
      residential: true,
      commercial: true,
      automotive: true,
    },
    {
      feature: "Same Day Service",
      residential: true,
      commercial: true,
      automotive: true,
    },
    {
      feature: "High Security Locks",
      residential: true,
      commercial: true,
      automotive: false,
    },
    {
      feature: "Master Key Systems",
      residential: true,
      commercial: true,
      automotive: false,
    },
    {
      feature: "Digital/Smart Locks",
      residential: true,
      commercial: true,
      automotive: false,
    },
    {
      feature: "Key Programming",
      residential: false,
      commercial: false,
      automotive: true,
    },
    {
      feature: "Lock Rekeying",
      residential: true,
      commercial: true,
      automotive: true,
    },
    {
      feature: "Security Consultation",
      residential: true,
      commercial: true,
      automotive: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Service Comparison</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compare our comprehensive locksmith services across residential, commercial, and automotive needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg shadow-lg bg-white overflow-hidden"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Feature</TableHead>
                <TableHead className="text-center">Residential</TableHead>
                <TableHead className="text-center">Commercial</TableHead>
                <TableHead className="text-center">Automotive</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{service.feature}</TableCell>
                  <TableCell className="text-center">
                    {service.residential ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {service.commercial ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {service.automotive ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceComparison;
