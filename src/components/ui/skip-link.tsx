import { cn } from "@/lib/utils";

interface SkipLinkProps {
  className?: string;
}

const SkipLink = ({ className }: SkipLinkProps) => {
  return (
    <a
      href="#main-content"
      className={cn(
        "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50",
        "focus:px-4 focus:py-2 focus:bg-white focus:text-primary focus:shadow-lg",
        "focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
        className
      )}
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;