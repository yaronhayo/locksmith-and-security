
// Define schema-related type definitions

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQQuestion {
  "@type": string;
  name: string;
  acceptedAnswer: {
    "@type": string;
    text: string;
  };
}

export interface FAQSchema {
  type: string;
  data: {
    "@context": string;
    "@type": string;
    mainEntity: FAQQuestion[];
  };
}

export interface SchemaData {
  type: string;
  data: any;
}

export interface LocalBusinessSchema {
  type: string;
  data: {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    url: string;
    telephone: string;
    image: string;
    priceRange: string;
    address: {
      "@type": string;
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    geo: {
      "@type": string;
      latitude: string;
      longitude: string;
    };
    openingHoursSpecification: any;
    sameAs?: string[];
  };
}

export interface WebSiteSchema {
  type: string;
  data: {
    "@context": string;
    "@type": string;
    "@id": string;
    name: string;
    description: string;
    url: string;
    inLanguage: string;
    publisher: {
      "@type": string;
      name: string;
      logo: {
        "@type": string;
        url: string;
      };
    };
    potentialAction?: any[];
  };
}

export interface ServiceSchema {
  type: string;
  data: {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    serviceType: string;
    url: string;
    provider: {
      "@type": string;
      name: string;
      image: string;
      telephone: string;
      priceRange: string;
      address: {
        "@type": string;
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
      };
    };
    areaServed: any;
    hasOfferCatalog: {
      "@type": string;
      name: string;
      itemListElement: any[];
    };
    offers?: {
      "@type": string;
      price: string;
      priceCurrency: string;
    };
    mainEntityOfPage?: {
      "@type": string;
      "@id": string;
      lastReviewed?: string;
      datePublished?: string;
      dateModified?: string;
    };
  };
}

export interface BlogPostSchema {
  type: string;
  data: {
    "@context": string;
    "@type": string;
    mainEntityOfPage: {
      "@type": string;
      "@id": string;
    };
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified: string;
    author: {
      "@type": string;
      name: string;
    };
    publisher: {
      "@type": string;
      name: string;
      logo: {
        "@type": string;
        url: string;
        width: number;
        height: number;
      };
    };
    keywords: string;
    articleSection: string;
  };
}

export interface SocialMediaTags {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  type?: string;
  siteName?: string;
  twitterCard?: string;
  twitterSite?: string;
}
