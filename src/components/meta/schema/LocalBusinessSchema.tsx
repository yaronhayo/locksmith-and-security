
import React from "react";

export interface LocalBusinessSchemaProps {
  name?: string;
  telephone?: string;
  priceRange?: string;
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
  image?: string;
  sameAs?: string[];
  description?: string;
  openingHours?: string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
  url?: string;
  email?: string;
  founder?: string;
  foundingDate?: string;
  serviceArea?: {
    type: string;
    name: string;
  }[];
}

const defaultProps: LocalBusinessSchemaProps = {
  name: "247 Locksmith & Security",
  telephone: "(201) 748-2070",
  priceRange: "$$",
  streetAddress: "104 Harrison St",
  addressLocality: "Hoboken",
  addressRegion: "NJ",
  postalCode: "07030",
  addressCountry: "US",
  image: "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
  sameAs: [
    "https://www.facebook.com/247locksmithandsecurity",
    "https://twitter.com/247locksmith",
    "https://www.instagram.com/247locksmithandsecurity"
  ],
  description: "Professional locksmith services for residential, commercial, and automotive needs. 24/7 emergency service available.",
  openingHours: [
    "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday 00:00-23:59"
  ],
  url: "https://247locksmithandsecurity.com",
  email: "info@247locksmithandsecurity.com"
};

export const createLocalBusinessSchema = (props: LocalBusinessSchemaProps = {}) => {
  const mergedProps = { ...defaultProps, ...props };
  
  return {
    type: 'LocalBusiness',
    data: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://247locksmithandsecurity.com/#localbusiness",
      "name": mergedProps.name,
      "telephone": mergedProps.telephone,
      "priceRange": mergedProps.priceRange,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": mergedProps.streetAddress,
        "addressLocality": mergedProps.addressLocality,
        "addressRegion": mergedProps.addressRegion,
        "postalCode": mergedProps.postalCode,
        "addressCountry": mergedProps.addressCountry
      },
      ...(mergedProps.image && { "image": mergedProps.image }),
      ...(mergedProps.sameAs && { "sameAs": mergedProps.sameAs }),
      ...(mergedProps.description && { "description": mergedProps.description }),
      ...(mergedProps.url && { "url": mergedProps.url }),
      ...(mergedProps.email && { "email": mergedProps.email }),
      ...(mergedProps.founder && { "founder": {
        "@type": "Person",
        "name": mergedProps.founder
      }}),
      ...(mergedProps.foundingDate && { "foundingDate": mergedProps.foundingDate }),
      ...(mergedProps.openingHours && { "openingHoursSpecification": mergedProps.openingHours.map(hours => {
        const [days, time] = hours.split(" ");
        const [opens, closes] = time.split("-");
        return {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": days.split(","),
          "opens": `${opens.slice(0, 2)}:${opens.slice(2)}`,
          "closes": `${closes.slice(0, 2)}:${closes.slice(2)}`
        };
      })}),
      ...(mergedProps.geo && {
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": mergedProps.geo.latitude,
          "longitude": mergedProps.geo.longitude
        }
      }),
      ...(mergedProps.serviceArea && {
        "areaServed": mergedProps.serviceArea.map(area => ({
          "@type": area.type,
          "name": area.name
        }))
      })
    }
  };
};
