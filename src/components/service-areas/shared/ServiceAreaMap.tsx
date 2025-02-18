
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ServiceAreaMapProps {
  locationName: string;
}

const ServiceAreaMap = ({ locationName }: ServiceAreaMapProps) => {
  return (
    <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
      <AspectRatio ratio={16/9}>
        <img 
          src="/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png"
          alt={`Professional locksmith services in ${locationName}, New Jersey`}
          className="object-cover w-full h-full"
          loading="lazy"
          width={1200}
          height={675}
        />
      </AspectRatio>
    </div>
  );
};

export default ServiceAreaMap;
