import { useEffect } from "react";

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted local locksmith serving North Bergen and surrounding areas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">Our Mission</h3>
            <p className="text-gray-600">
              To provide fast, reliable, and professional locksmith services to our community.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">Our Values</h3>
            <p className="text-gray-600">
              Integrity, professionalism, and customer satisfaction are at the core of our business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
