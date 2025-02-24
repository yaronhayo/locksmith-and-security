import { FAQSchema } from "@/types/schema";

interface ServiceAreaFAQProps {
  locationName: string;
  faqSchema: FAQSchema;
}

const ServiceAreaFAQ = ({ locationName, faqSchema }: ServiceAreaFAQProps) => {
  return (
    <section className="py-12 bg-gray-50 rounded-xl" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions About Our {locationName} Services
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqSchema.data.mainEntity.map((faq: any, index: number) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{faq.name}</h3>
              <p className="text-gray-600">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaFAQ;
