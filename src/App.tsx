
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import ScrollToTop from './utils/ScrollToTop';
import GoogleMapsProvider from './components/providers/GoogleMapsProvider';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GoogleMapsProvider>
          <ScrollToTop />
          <Routes />
          <Toaster />
        </GoogleMapsProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
