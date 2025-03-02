
import React from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck, Wrench, Clock, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageLayout from '@/components/layouts/PageLayout';
import ServicePageContent from '@/components/sections/services/service-page';
import { GateLocksContent } from '@/components/services/gate-locks/GateLocksContent';
import { gateLocksServiceSchema, gateLocksFaqs, gateLocksRelatedServices } from '@/components/services/gate-locks/GateLocksSchema';

const GateLocks = () => {
  return (
    <PageLayout
      title="Gate Lock Installation & Repair | Residential Locksmith Services"
      description="Professional gate lock installation and repair by certified technicians. Expert solutions for all types of residential gates with quality hardware and guaranteed workmanship."
      schema={gateLocksServiceSchema}
      keywords="gate locks, gate lock installation, gate lock repair, driveway gate locks, garden gate locks, residential gate security, gate lock replacement"
    >
      <ServicePageContent
        title="Gate Lock Installation & Repair"
        description="Professional installation and repair of secure gate locks for residential properties. Our certified technicians provide expert solutions for all types of gates."
        serviceName="Gate Lock"
        serviceCategory="Residential"
        mainContent={<GateLocksContent />}
        faqs={gateLocksFaqs}
        relatedServices={gateLocksRelatedServices}
      />
    </PageLayout>
  );
};

export default GateLocks;
