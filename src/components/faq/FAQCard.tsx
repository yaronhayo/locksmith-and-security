import { Card, CardContent } from "@/components/ui/card";

interface FAQCardProps {
  question: string;
  answer: string;
}

const FAQCard = ({ question, answer }: FAQCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-heading-dark">{question}</h3>
        <p className="text-gray-600">{answer}</p>
      </CardContent>
    </Card>
  );
};

export default FAQCard;