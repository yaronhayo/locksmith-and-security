
import React from 'react';
import { Helmet } from 'react-helmet';

export const ServicePageSharedStyles: React.FC = () => {
  return (
    <Helmet>
      <style type="text/css">{`
        /* Service page specific styles */
        .service-highlight {
          background: linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0));
          border-left: 3px solid #3b82f6;
          padding: 1rem;
          margin: 1.5rem 0;
        }
        
        .service-feature {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .service-feature-icon {
          flex-shrink: 0;
          width: 2.5rem;
          height: 2.5rem;
          background-color: rgba(59, 130, 246, 0.1);
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
        }
        
        .service-process-step {
          position: relative;
          padding-left: 3rem;
          margin-bottom: 2rem;
        }
        
        .service-process-step-number {
          position: absolute;
          left: 0;
          top: 0;
          width: 2rem;
          height: 2rem;
          background-color: #3b82f6;
          color: white;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        
        .service-process-step:not(:last-child):after {
          content: '';
          position: absolute;
          left: 1rem;
          top: 2.5rem;
          bottom: -1rem;
          width: 1px;
          background-color: #e5e7eb;
        }
        
        .service-faq-item {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .service-faq-question {
          font-weight: 600;
          font-size: 1.125rem;
          margin-bottom: 0.75rem;
          color: #1e3a8a;
        }
        
        .service-cta {
          background-color: #f3f4f6;
          border-radius: 0.5rem;
          padding: 2rem;
          margin: 2rem 0;
          text-align: center;
        }
        
        @media (min-width: 768px) {
          .service-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
      `}</style>
    </Helmet>
  );
};
