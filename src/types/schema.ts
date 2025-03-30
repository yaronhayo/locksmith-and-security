
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
