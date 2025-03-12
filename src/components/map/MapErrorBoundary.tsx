
import { Component, ErrorInfo, ReactNode } from "react";
import MapError from "./MapError";
import { clearApiKeyCache } from "@/hooks/useApiKeys";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class MapErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Map error:", error, errorInfo);
    
    // If we detect a Google Maps related error, try to reload the API
    if (
      error.message.includes('google') || 
      error.message.includes('map') || 
      error.stack?.includes('maps.googleapis.com')
    ) {
      console.log("Detected Google Maps error, attempting to reload API");
      clearApiKeyCache('maps');
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return <MapError error={this.state.error?.message || "An error occurred with the map"} />;
    }

    return this.props.children;
  }
}

export default MapErrorBoundary;
