
import { useMemo } from "react";
import { useSettings } from "@/hooks/useSettings";
import { useLocations } from "@/hooks/useLocations";
import { useReviews } from "@/components/reviews/useReviews";
import { createServiceAreaSchemas } from "../ServiceAreaSchemas";

export const useServiceAreaData = (areaSlug: string) => {
  const { data: settings, isLoading: settingsLoading } = useSettings();
  const { data: locations, isLoading: locationsLoading } = useLocations();
  
  const location = useMemo(() => {
    return locations?.find(loc => loc.slug === areaSlug);
  }, [locations, areaSlug]);
  
  const { 
    displayedReviews, 
    isLoading: reviewsLoading, 
    totalReviews 
  } = useReviews(location?.name);

  const schemas = useMemo(() => {
    return createServiceAreaSchemas(location, settings, areaSlug);
  }, [location, settings, areaSlug]);
  
  const faqSchema = useMemo(() => {
    return schemas.find(schema => schema.type === 'FAQPage');
  }, [schemas]);
  
  const isLoading = settingsLoading || locationsLoading;
  
  return {
    location,
    settings,
    displayedReviews,
    reviewsLoading,
    totalReviews,
    schemas,
    faqSchema,
    isLoading
  };
};
