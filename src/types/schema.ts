
export interface FAQQuestion {
  name: string;
  acceptedAnswer: {
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
