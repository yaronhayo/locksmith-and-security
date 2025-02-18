
import { cn } from "@/lib/utils";

interface CarouselDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

const CarouselDots = ({ total, current, onDotClick }: CarouselDotsProps) => {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={cn(
            "w-2 h-2 rounded-full transition-all",
            current === index ? "bg-primary" : "bg-gray-300"
          )}
          aria-label={`Go to review ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
