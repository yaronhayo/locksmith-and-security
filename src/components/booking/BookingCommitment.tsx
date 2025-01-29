import { Shield, Clock, CreditCard } from "lucide-react";

const commitments = [
  {
    icon: Shield,
    text: "Licensed and insured professionals"
  },
  {
    icon: Clock,
    text: "Fast response times"
  },
  {
    icon: CreditCard,
    text: "Competitive and transparent pricing"
  }
];

const BookingCommitment = () => {
  return (
    <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
      <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
      <ul className="space-y-3">
        {commitments.map((commitment, index) => (
          <li key={index} className="flex items-start">
            <span className="bg-primary/10 p-1 rounded mr-3 mt-1">
              <commitment.icon className="w-4 h-4 text-primary" />
            </span>
            <span>{commitment.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingCommitment;