
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

export interface Schema {
  type: string;
  data: any;
}
