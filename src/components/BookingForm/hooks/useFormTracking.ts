
import { useEffect } from "react";
import { startFormTracking } from "@/utils/sessionTracker";

export const useFormTracking = () => {
  // Start form tracking when the component loads
  useEffect(() => {
    startFormTracking();
  }, []);
};
