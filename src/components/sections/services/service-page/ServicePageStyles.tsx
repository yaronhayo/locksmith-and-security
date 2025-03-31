
import React from 'react';

export const ServicePageSharedStyles: React.FC = () => {
  return (
    <style>
      {`
      .service-content h3 {
        color: #1E3A8A;
        border-left: 3px solid #FFA500;
        padding-left: 12px;
        margin-top: 28px;
        margin-bottom: 16px;
      }
      
      .service-content strong {
        color: #1E3A8A;
      }
      
      .service-content ul li::marker {
        color: #FFA500;
      }
      
      .service-content ul li strong {
        color: #1E3A8A;
      }
      
      .service-content p em {
        color: #F97316;
        font-style: italic;
        font-weight: 500;
      }

      .service-content h4 {
        color: #1E3A8A;
        border-bottom: 2px solid #FFA500;
        display: inline-block;
        padding-bottom: 4px;
      }

      .service-content a {
        color: #F97316;
        text-decoration: underline;
        text-decoration-color: #FFA500;
        text-underline-offset: 2px;
      }

      .service-content a:hover {
        color: #1E3A8A;
        text-decoration-color: #1E3A8A;
      }
      `}
    </style>
  );
};
