
import { cn } from "@/lib/utils";

interface CarouselDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
  className?: string;
  dotClassName?: string;
  activeDotClassName?: string;
}

const CarouselDots = ({ 
  total, 
  current, 
  onDotClick, 
  className = "", 
  dotClassName = "w-2 h-2",
  activeDotClassName = "bg-primary" 
}: CarouselDotsProps) => {
  return (
    <div 
      className={cn("flex justify-center gap-2 mt-4", className)} 
      role="tablist" 
      aria-label="Review slides"
    >
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={cn(
            dotClassName,
            "rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            current === index ? activeDotClassName : "bg-gray-300"
          )}
          aria-label={`Go to review ${index + 1}`}
          aria-selected={current === index}
          role="tab"
          tabIndex={current === index ? 0 : -1}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
