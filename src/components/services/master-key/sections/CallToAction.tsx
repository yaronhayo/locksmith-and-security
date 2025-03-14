
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { usePhoneNumber } from "@/utils/phoneUtils";

const CallToAction = () => {
  const { phoneHref } = usePhoneNumber();
  
  return (
    <section className="bg-gray-50 p-6 rounded-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold mb-2">Ready to secure your business with a professional master key system?</h2>
          <p className="text-gray-600">Contact our experts for a consultation and custom solution design.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg">
            <a href={phoneHref}>Call Now</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
