import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [zipCode, setZipCode] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    jobType: '',
    address: '',
    timing: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: "We'll contact you shortly to confirm your booking.",
    });
    // Reset form
    setStep(1);
    setZipCode('');
    setFormData({
      name: '',
      phone: '',
      jobType: '',
      address: '',
      timing: ''
    });
  };

  if (step === 1) {
    return (
      <div className="w-full max-w-md">
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter Your ZIP Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="text-lg p-6"
          />
          <Button 
            className="w-full text-lg py-6"
            onClick={() => setStep(2)}
            disabled={!zipCode}
          >
            Start Here
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <Input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      />
      <Input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
        required
      />
      <Select onValueChange={(value) => setFormData({...formData, jobType: value})}>
        <SelectTrigger>
          <SelectValue placeholder="Select Service Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="house">House Lockout</SelectItem>
          <SelectItem value="car">Car Lockout</SelectItem>
          <SelectItem value="business">Business Lockout</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({...formData, address: e.target.value})}
        required
      />
      <Select onValueChange={(value) => setFormData({...formData, timing: value})}>
        <SelectTrigger>
          <SelectValue placeholder="When do you need service?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asap">ASAP</SelectItem>
          <SelectItem value="24h">Within 24 hours</SelectItem>
          <SelectItem value="week">This week</SelectItem>
          <SelectItem value="planning">Planning & Budgeting</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex space-x-4">
        <Button type="button" variant="outline" onClick={() => setStep(1)} className="w-1/2">
          Back
        </Button>
        <Button type="submit" className="w-1/2">
          Send Now
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;