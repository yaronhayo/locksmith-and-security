
import { Clock, Shield, MapPin, Award, CheckCircle, Key } from "lucide-react";

interface ServiceAreaInfoProps {
  locationName: string;
  locationDescription?: string;
}

const ServiceAreaInfo = ({ locationName, locationDescription }: ServiceAreaInfoProps) => {
  return (
    <section className="bg-white rounded-xl shadow-sm p-8 md:p-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">Professional Locksmith Services in {locationName}, NJ</h2>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to your trusted local locksmith in {locationName}, NJ. We provide professional, reliable locksmith services for all residential, commercial, and automotive security needs. Our team of licensed and insured technicians are available 24/7 to serve the {locationName} community with expert security solutions.
        </p>
        
        {locationDescription && (
          <p className="text-lg text-gray-700 mb-8">
            {locationDescription}
          </p>
        )}
        
        <h3 className="text-2xl font-semibold mb-4 mt-8">How We Serve {locationName}</h3>
        <p className="text-lg text-gray-700 mb-4">
          For years, we've been providing {locationName} residents and businesses with exceptional locksmith services. Our local technicians know the area well and can quickly respond to your security needs. Whether you're dealing with a lockout situation, need new locks installed, or require specialized security solutions, our team has the expertise to assist you.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
              <MapPin className="h-5 w-5" />
              Local Expertise
            </h3>
            <p className="text-gray-600">
              Our technicians are familiar with {locationName}'s unique security needs, from residential neighborhoods to commercial districts. This local knowledge allows us to provide customized security solutions that work for your specific situation.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
              <Award className="h-5 w-5" />
              Licensed & Certified
            </h3>
            <p className="text-gray-600">
              Our locksmiths are fully licensed, insured, and certified to provide locksmith services in {locationName} and throughout New Jersey. We maintain the highest standards of professional service and ongoing training.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Why {locationName} Residents Choose Us</h3>
        
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center p-6 bg-primary/5 rounded-lg text-center">
            <Clock className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-semibold mb-2">24/7 Availability</h4>
            <p className="text-sm text-gray-600">Emergency service throughout {locationName}</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-primary/5 rounded-lg text-center">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-semibold mb-2">Fully Insured</h4>
            <p className="text-sm text-gray-600">Complete protection and peace of mind</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-primary/5 rounded-lg text-center">
            <Key className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-semibold mb-2">Expert Technicians</h4>
            <p className="text-sm text-gray-600">Skilled professionals with years of experience</p>
          </div>
        </div>
        
        <div className="mt-8 space-y-4">
          <h3 className="text-2xl font-semibold mb-4">Our Commitment to {locationName}</h3>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-gray-700">
              <span className="font-semibold">Fast Response Times:</span> When you're locked out or facing a security emergency in {locationName}, you need help quickly. Our technicians prioritize rapid response times to get you back to your day.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-gray-700">
              <span className="font-semibold">Quality Workmanship:</span> We use high-quality materials and the latest techniques to ensure that every job is done right the first time, providing lasting security solutions for your home, business, or vehicle.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-gray-700">
              <span className="font-semibold">Customer Satisfaction:</span> Our technicians are not only skilled in locksmithing but also in providing excellent customer service. We prioritize your satisfaction with every interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaInfo;
