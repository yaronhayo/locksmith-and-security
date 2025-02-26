import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster"
import Routes from './Routes';
import ScrollToTop from './utils/ScrollToTop';
import { MobileMenuProvider } from './components/MobileMenuProvider';
import GoogleMapsProvider from './components/providers/GoogleMapsProvider';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <GoogleMapsProvider>
          <BrowserRouter>
            <MobileMenuProvider>
              <ScrollToTop />
              <Routes />
              <Toaster />
            </MobileMenuProvider>
          </BrowserRouter>
        </GoogleMapsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
