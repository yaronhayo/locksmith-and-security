import ServiceLayout from "@/components/layouts/ServiceLayout";

const NewCarKeyPage = () => {
  return (
    <ServiceLayout
      title="New Car Key Service"
      description="Professional car key replacement service in North Bergen. Get a new car key cut and programmed by expert automotive locksmiths."
      service="New Car Key"
      callToAction="Need a New Car Key?"
    >
      <div className="prose prose-lg max-w-none">
        <p>
          Lost your car key or need a spare? Our professional automotive locksmith service provides complete car key replacement solutions, including cutting and programming for all major vehicle brands.
        </p>
        
        <h3>Our Car Key Services Include:</h3>
        <ul>
          <li>Key cutting for all vehicle makes and models</li>
          <li>Transponder key programming</li>
          <li>Smart key replacement</li>
          <li>Emergency car key replacement</li>
          <li>Mobile service - we come to you</li>
        </ul>
      </div>
    </ServiceLayout>
  );
};

export default NewCarKeyPage;