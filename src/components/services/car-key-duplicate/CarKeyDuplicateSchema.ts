
import { createFAQSchema } from "@/components/meta/schema/FAQSchema";

export const carKeyDuplicateFaqs = [
  {
    question: "How long does it take to duplicate a car key?",
    answer: "Most standard car keys can be duplicated in 15-30 minutes. For transponder keys or remote key fobs, the process may take 30-45 minutes as it includes both cutting and programming. Smart keys and proximity keys may take up to an hour depending on the vehicle's make and model."
  },
  {
    question: "Can any car key be duplicated?",
    answer: "Yes, virtually all car keys can be duplicated, including standard mechanical keys, transponder keys, remote key fobs, and smart keys. Our professional locksmiths have the specialized equipment needed to duplicate even the most advanced vehicle keys."
  },
  {
    question: "Is it cheaper to duplicate a car key at a locksmith than at a dealership?",
    answer: "Yes, professional locksmiths typically charge 40-70% less than dealerships for car key duplication while maintaining the same quality and functionality. We offer competitive pricing without compromising on quality or service."
  },
  {
    question: "Do I need to bring my vehicle for car key duplication?",
    answer: "For basic mechanical keys, you don't need to bring your vehicle - just the original key. However, for transponder keys, remote fobs, or smart keys that require programming, your vehicle will need to be present so we can sync the new key with your car's systems."
  },
  {
    question: "What information do I need to provide for car key duplication?",
    answer: "You'll need to provide proof of vehicle ownership (registration or title), your original key for duplication, and vehicle information (make, model, and year). For security purposes, we verify ownership before duplicating any automotive keys."
  },
  {
    question: "Can you duplicate a damaged car key?",
    answer: "In many cases, yes. If your original key is damaged but still has a visible key pattern, we can often create a new duplicate based on it. If the damage is severe, we may need to create a new key using your vehicle's key code instead."
  },
  {
    question: "Will a duplicated key work exactly like my original?",
    answer: "Yes, our professionally duplicated keys are designed to function exactly like your original key. This includes physical unlocking/locking of doors and ignition, as well as electronic functions like remote locking/unlocking, trunk release, and alarm features."
  },
  {
    question: "Do you offer mobile car key duplication?",
    answer: "Yes, we offer mobile car key duplication services. Our fully-equipped service vehicles can come to your location to create duplicate keys on-site, saving you time and hassle."
  }
];

export const carKeyDuplicateFaqSchema = createFAQSchema({
  questions: carKeyDuplicateFaqs
});

export const carKeyDuplicateServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Car Key Duplication Service",
  "provider": {
    "@type": "LocalBusiness",
    "name": "247 Locksmith & Security"
  },
  "serviceType": "Car Key Duplication",
  "areaServed": {
    "@type": "State",
    "name": "New Jersey"
  },
  "description": "Professional car key duplication service for all vehicle makes and models. Our expert locksmiths use advanced equipment to create precise, reliable duplicate car keys.",
  "offers": {
    "@type": "Offer",
    "price": "40.00",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "priceType": "https://schema.org/MinimumPrice",
      "price": "40.00",
      "priceCurrency": "USD"
    }
  }
};
