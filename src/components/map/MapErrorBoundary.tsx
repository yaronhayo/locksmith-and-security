
import { Component, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { logToService } from "@/utils/performanceMonitoring";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class MapErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error) {
    logToService('error', 'Map Error:', {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 rounded-lg text-center">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-red-900 mb-2">Map Error</h3>
          <p className="text-red-700 mb-4">
            {this.state.error?.message || 'An error occurred while loading the map'}
          </p>
          <Button 
            onClick={this.handleRetry}
            variant="secondary"
            className="mx-auto"
          >
            Retry Loading Map
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
