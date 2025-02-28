
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Shield, CheckCircle, ChevronRight } from 'lucide-react';
import GoogleMap from '../map/GoogleMap';
import AreasList from './service-areas/AreasList';
import EmergencyCallout from './service-areas/EmergencyCallout';
import { useLocations } from '@/hooks/useLocations';
import LoadingSpinner from '../LoadingSpinner';
import GoogleMapsProvider from '../providers/GoogleMapsProvider';
import MapError from '../map/MapError';
import { ErrorBoundary } from 'react-error-boundary';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const ServiceAreasSection = () => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [mapKey, setMapKey] = useState(0); // Force re-render key
  const [activeView, setActiveView] = useState('list');
  const { data: locations, isLoading, error } = useLocations();

  // Force re-render map after component is fully mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapKey(prev => prev + 1);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !locations) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <MapError error={error?.message || 'Error loading service areas'} />
      </div>
    );
  }

  const mapMarkers = locations.map(location => ({
    lat: location.lat,
    lng: location.lng,
    title: location.name,
    slug: location.slug
  }));

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Service Areas</h2>
            <p className="text-lg text-gray-600 mb-6">
              We provide professional locksmith services throughout Northern New Jersey, with fast response times and reliable service 24/7.
            </p>
          </motion.div>
          
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Badge variant="outline" className="py-1 px-3 bg-primary/10 text-primary border-primary/20">
              <Clock className="h-4 w-4 mr-1" /> 24/7 Availability
            </Badge>
            <Badge variant="outline" className="py-1 px-3 bg-primary/10 text-primary border-primary/20">
              <Phone className="h-4 w-4 mr-1" /> Fast Response Time
            </Badge>
            <Badge variant="outline" className="py-1 px-3 bg-primary/10 text-primary border-primary/20">
              <Shield className="h-4 w-4 mr-1" /> Licensed & Insured
            </Badge>
          </div>
          
          <Tabs defaultValue="list" className="w-full" onValueChange={setActiveView}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="list">Location List</TabsTrigger>
              <TabsTrigger value="map">Interactive Map</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {activeView === "list" && (
            <>
              <motion.div 
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-lg border-0">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                    <CardTitle className="text-xl text-primary">Areas We Proudly Serve</CardTitle>
                    <CardDescription>
                      Click on a location to learn more about our services in that area
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {locations.map((area, index) => (
                        <motion.div
                          key={area.slug}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          onMouseEnter={() => setHoveredArea(area.slug)}
                          onMouseLeave={() => setHoveredArea(null)}
                          className="group"
                        >
                          <Link
                            to={`/service-areas/${area.slug}`}
                            className={`flex items-start space-x-3 p-4 rounded-lg transition-all ${
                              hoveredArea === area.slug ? 'bg-primary/10' : 'hover:bg-primary/5'
                            }`}
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            <div className="flex-shrink-0">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                                hoveredArea === area.slug ? 'bg-primary/20' : 'bg-primary/10 group-hover:bg-primary/20'
                              }`}>
                                <MapPin className="w-5 h-5 text-primary" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className={`font-medium transition-colors ${
                                hoveredArea === area.slug ? 'text-primary' : 'text-gray-900 group-hover:text-primary'
                              }`}>
                                {area.name}, NJ
                              </h3>
                              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                {area.description || `Professional locksmith services in ${area.name}, New Jersey`}
                              </p>

                              <div className="flex items-center mt-2 text-[#F97316] text-sm font-medium">
                                <span>View services</span>
                                <ChevronRight className="h-4 w-4 ml-1" />
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-8 shadow-lg border-0 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-[#F97316]/10 to-[#F97316]/5 pb-3">
                    <CardTitle className="text-xl text-[#F97316]">What We Provide In All Service Areas</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {['Emergency Locksmith Services', 'Residential Locksmith Solutions', 'Commercial Security Systems', 'Automotive Locksmith', 'Smart Lock Installation', 'Master Key Systems'].map((service, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          className="flex items-center"
                        >
                          <CheckCircle className="h-5 w-5 text-[#F97316] mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <Separator className="my-6" />
                    
                    <div className="rounded-lg bg-primary/5 p-4">
                      <h4 className="font-medium text-primary mb-2">Our Coverage Guarantee</h4>
                      <p className="text-sm text-gray-600">
                        We guarantee service across Northern New Jersey, including areas not listed above. 
                        If you're located nearby but don't see your town listed, please contact us and 
                        we'll confirm our ability to serve your location.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 flex justify-center py-4">
                    <Button asChild variant="outline" className="bg-white">
                      <Link to="/contact">
                        Check if we serve your area
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{ height: '600px' }}>
                  <ErrorBoundary FallbackComponent={MapError} key={`map-error-boundary-${mapKey}`}>
                    <GoogleMapsProvider>
                      <GoogleMap 
                        key={`google-map-${mapKey}`}
                        markers={mapMarkers}
                        highlightedMarker={hoveredArea}
                        showAllMarkers={true}
                        zoom={11}
                        center={{ lat: 40.7795, lng: -74.0324 }}
                      />
                    </GoogleMapsProvider>
                  </ErrorBoundary>
                </div>
                
                <Card className="mt-8 shadow-lg border-0 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 pb-4">
                    <CardTitle className="text-xl text-blue-500">Emergency Response Times</CardTitle>
                    <CardDescription>
                      We pride ourselves on fast, reliable service
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-5">
                    <div className="space-y-3">
                      {[
                        { area: 'North Bergen', time: '15-20 minutes' },
                        { area: 'Union City', time: '15-20 minutes' },
                        { area: 'Jersey City', time: '20-30 minutes' },
                        { area: 'Hoboken', time: '20-25 minutes' },
                        { area: 'Secaucus', time: '25-35 minutes' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2">
                          <span className="text-gray-700">{item.area}</span>
                          <Badge className="bg-green-50 text-green-700 hover:bg-green-100 border border-green-200">
                            <Clock className="h-3 w-3 mr-1" /> {item.time}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> Response times may vary based on traffic, weather conditions, and availability. 
                        We always strive for the fastest possible response to your security needs.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </>
          )}
          
          {activeView === "map" && (
            <>
              <div className="lg:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden" style={{ height: '700px' }}>
                <ErrorBoundary FallbackComponent={MapError} key={`map-error-boundary-full-${mapKey}`}>
                  <GoogleMapsProvider>
                    <GoogleMap 
                      key={`google-map-full-${mapKey}`}
                      markers={mapMarkers}
                      highlightedMarker={hoveredArea}
                      showAllMarkers={true}
                      zoom={11}
                      center={{ lat: 40.7795, lng: -74.0324 }}
                    />
                  </GoogleMapsProvider>
                </ErrorBoundary>
              </div>
              
              <div className="lg:col-span-2">
                <Card className="shadow-lg border-0">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                    <CardTitle className="text-xl text-primary">Select a Service Area</CardTitle>
                    <CardDescription>
                      Hover over a location to see it on the map
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-5 max-h-[600px] overflow-y-auto">
                    {locations.map((area, index) => (
                      <motion.div
                        key={area.slug}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          to={`/service-areas/${area.slug}`}
                          className={`flex items-center p-3 rounded-lg transition-all mb-2 ${
                            hoveredArea === area.slug ? 'bg-primary/10' : 'hover:bg-primary/5'
                          }`}
                          onMouseEnter={() => setHoveredArea(area.slug)}
                          onMouseLeave={() => setHoveredArea(null)}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <MapPin className={`h-5 w-5 mr-3 ${hoveredArea === area.slug ? 'text-primary' : 'text-gray-500'}`} />
                          <span className={`font-medium ${hoveredArea === area.slug ? 'text-primary' : 'text-gray-700'}`}>
                            {area.name}, NJ
                          </span>
                          <ChevronRight className="h-4 w-4 ml-auto text-gray-400" />
                        </Link>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </div>
        
        <EmergencyCallout className="mt-16" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Need Locksmith Services Fast?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Our mobile locksmiths are ready to respond to your security needs anywhere in Northern New Jersey.
            Call us now or book online for reliable, professional service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-[#F97316] hover:bg-[#F97316]/90">
              <Phone className="mr-2 h-4 w-4" /> Call Now: (201) 748-2070
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/book-online">Book Online</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
