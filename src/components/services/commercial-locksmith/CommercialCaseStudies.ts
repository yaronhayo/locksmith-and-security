
import { CaseStudy } from '../shared/CaseStudies';

export const commercialCaseStudies: CaseStudy[] = [
  {
    title: "Multi-Level Access Control System",
    description: "A growing business needed a sophisticated access management system for different departments.",
    challenge: "A technology company with 50+ employees in North Bergen needed to secure different departments with varying access levels. Their previous key system was becoming unmanageable as the company grew.",
    solution: "We designed and implemented a comprehensive master key system with four security levels, including grand master, master, sub-master, and individual keys. This was combined with keypad access for sensitive areas and after-hours entry.",
    result: "The company achieved streamlined access management with clear security zones. Management could access all areas while limiting employee access to only necessary departments. The system allowed for easy addition of new employees and revocation of access when needed.",
    customerName: "TechInnovate Inc.",
    customerLocation: "North Bergen",
    date: "2023-03-09"
  },
  {
    title: "Retail Security Overhaul",
    description: "A retail chain needed to enhance security across multiple locations after security incidents.",
    challenge: "A retail chain with four locations experienced security issues and needed a standardized, high-security solution that would work across all stores while providing centralized management.",
    solution: "We implemented high-security commercial locks with restricted keyways, making unauthorized key duplication impossible. For the main location, we installed an electronic access control system with programmable key fobs for managers.",
    result: "The retail chain experienced a significant improvement in security with no further incidents. The management gained the ability to instantly revoke access privileges when employees left and could track which employees accessed which locations and when.",
    customerName: "Urban Style Retailers",
    customerLocation: "Jersey City",
    date: "2023-07-15"
  }
];
