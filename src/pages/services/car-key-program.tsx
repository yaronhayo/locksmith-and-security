import ServiceLayout from "@/components/layouts/ServiceLayout";

const CarKeyProgramPage = () => {
  return (
    <ServiceLayout
      title="Car Key Programming Service"
      description="Professional car key programming service in North Bergen. Expert programming for transponder keys and smart keys."
      service="Car Key Program"
      callToAction="Need Car Key Programming?"
    >
      <div className="prose prose-lg max-w-none">
        <p>
          Our professional car key programming service ensures your new or replacement car keys work perfectly with your vehicle's security system. We specialize in programming transponder keys, smart keys, and key fobs for all major vehicle brands.
        </p>
        
        <h3>Our Programming Services Include:</h3>
        <ul>
          <li>Transponder key programming</li>
          <li>Smart key programming</li>
          <li>Key fob programming</li>
          <li>All major vehicle brands supported</li>
          <li>Mobile service available</li>
        </ul>
      </div>
    </ServiceLayout>
  );
};

export default CarKeyProgramPage;