import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const SecuritySolutions = () => {
  return (
    <div className="space-y-12">
      <section>
        <h3 className="text-2xl font-bold mb-4">Rapid Response Commercial Lockout Service</h3>
        <p className="text-gray-600 mb-6">
          Our commercial locksmith team specializes in quick response times and efficient solutions 
          for all types of businesses. We arrive fully equipped to handle any commercial lockout 
          situation, minimizing downtime and ensuring your business security is maintained.
        </p>
        <p className="text-gray-600 mb-6">
          Whether you operate a small retail store, large office building, or industrial facility, 
          our experienced technicians have the expertise to handle your specific security needs.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-4">Advanced Commercial Security Solutions</h3>
        <p className="text-gray-600 mb-6">
          Beyond emergency lockout services, we offer comprehensive commercial security solutions:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li>Access control system installation and maintenance</li>
          <li>Master key system design and implementation</li>
          <li>High-security lock upgrades</li>
          <li>Security system integration</li>
          <li>Regular maintenance programs</li>
          <li>Security consultation and assessment</li>
        </ul>
      </section>

      <div className="bg-primary/5 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Business Lockout Emergency? Call Now!</h3>
        <p className="text-gray-600 mb-6">
          Don't let a lockout disrupt your business. Our commercial locksmith team is ready to help 24/7.
        </p>
        <Button size="lg" asChild>
          <a href="tel:5513037874" className="flex items-center justify-center">
            <Phone className="mr-2" />
            Call (551) 303-7874
          </a>
        </Button>
      </div>
    </div>
  );
};

export default SecuritySolutions;