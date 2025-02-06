import ServiceAreaLayout from "@/components/service-areas/shared/ServiceAreaLayout";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "24/7 Locksmith Services in West New York, NJ",
  "description": "Professional locksmith services in West New York, NJ. Available 24/7 for residential, commercial, and automotive locksmith needs.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "telephone": "+12017482070",
    "areaServed": {
      "@type": "City",
      "name": "West New York",
      "containedIn": {
        "@type": "State",
        "name": "New Jersey"
      }
    }
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "40.7878",
      "longitude": "-74.0143"
    },
    "geoRadius": "5mi"
  }
};

const WestNewYork = () => {
  return (
    <ServiceAreaLayout
      title="West New York Locksmith Services | 24/7 Emergency Locksmith"
      description="Professional locksmith services in West New York, NJ. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response times and competitive rates."
      schema={schema}
      areaName="West New York"
    />
  );
};

export default WestNewYork;