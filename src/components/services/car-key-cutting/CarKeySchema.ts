
import { createFAQSchema } from "@/schemas/faqSchema";

export const carKeyFaqs = [
  {
    question: "What is car key cutting?",
    answer: "Car key cutting is the process of creating a new physical key for your vehicle that matches its lock cylinders. Using specialized equipment, our locksmiths precisely cut the key's blade according to your vehicle's specific key code pattern."
  },
  {
    question: "How long does it take to cut a car key?",
    answer: "Basic mechanical car key cutting typically takes 5-15 minutes. For more complex keys with transponder chips, the entire process including programming may take 20-40 minutes depending on your vehicle make and model."
  },
  {
    question: "Can you cut a car key without the original?",
    answer: "Yes, we can cut car keys without having the original. We use your vehicle's VIN number and our database of key codes to create a new key from scratch. You'll need to provide proof of ownership for security purposes."
  },
  {
    question: "What types of car keys can you cut?",
    answer: "We can cut virtually all types of car keys including basic mechanical keys, laser-cut keys (sidewinder keys), high-security keys, and transponder key blanks that require additional programming after cutting."
  },
  {
    question: "Is a cut key the same as a programmed key?",
    answer: "No. Key cutting refers to creating the physical key blade that operates the mechanical locks. For modern vehicles with electronic systems, the key may also require programming to sync with your vehicle's immobilizer system after it's cut."
  },
  {
    question: "How much does car key cutting cost?",
    answer: "The cost varies depending on your vehicle make, model, and key type. Basic mechanical keys typically range from $50-$100, while laser-cut or high-security keys may cost more. We provide upfront pricing before beginning any work."
  },
  {
    question: "Can you cut keys for older vehicles?",
    answer: "Yes, we can cut keys for virtually all vehicle makes and models, including older vehicles. Our locksmiths have the tools and expertise to handle vintage and classic car keys as well as modern ones."
  },
  {
    question: "Do I need to bring my vehicle for key cutting?",
    answer: "For basic key cutting without programming, you don't necessarily need your vehicle present, but you'll need to provide vehicle information and proof of ownership. For keys requiring programming after cutting, the vehicle needs to be present."
  }
];

export const carKeyFaqSchema = createFAQSchema(carKeyFaqs);

export const carKeyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Car Key Cutting Service",
  "provider": {
    "@type": "LocalBusiness",
    "name": "247 Locksmith & Security"
  },
  "serviceType": "Car Key Cutting",
  "areaServed": {
    "@type": "State",
    "name": "New Jersey"
  },
  "description": "Professional car key cutting service for all vehicle makes and models. Our expert locksmiths use advanced equipment to create precise, reliable car keys.",
  "offers": {
    "@type": "Offer",
    "price": "50.00",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "priceType": "https://schema.org/MinimumPrice",
      "price": "50.00",
      "priceCurrency": "USD"
    }
  }
};
