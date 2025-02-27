
import { MapPin } from "lucide-react";
import { useCallback } from "react";

interface ServiceAreaNeighborhoodsProps {
  locationName: string;
  locationSlug: string;
}

const ServiceAreaNeighborhoods = ({ locationName, locationSlug }: ServiceAreaNeighborhoodsProps) => {
  // Function to get neighborhoods based on location
  const getNeighborhoods = useCallback(() => {
    switch (locationSlug) {
      case 'north-bergen':
        return [
          "Woodcliff", "Bergenline Avenue", "Tonnelle Avenue", "Kennedy Boulevard", 
          "Bull's Ferry", "Hudson Heights", "Columbia Park", "Liberty Avenue"
        ];
      case 'jersey-city':
        return [
          "Downtown", "Journal Square", "The Heights", "West Side", 
          "Greenville", "Bergen-Lafayette", "Liberty State Park", "Newport"
        ];
      case 'hoboken':
        return [
          "Downtown Hoboken", "Uptown Hoboken", "Midtown Hoboken", "Southwest Hoboken", 
          "Waterfront", "Stevens Campus", "Castle Point"
        ];
      case 'union-city':
        return [
          "Central Avenue", "Bergenline Avenue District", "Summit Avenue", 
          "New York Avenue", "Palisade Avenue", "Park Avenue"
        ];
      case 'west-new-york':
        return [
          "Bergenline Avenue", "Boulevard East", "Park Avenue", 
          "Kennedy Boulevard", "60th Street District", "Palisades"
        ];
      case 'secaucus':
        return [
          "Harmon Meadow", "North End", "Secaucus Junction", "Secaucus Plaza",
          "Meadowlands", "County Avenue", "Laurel Hill"
        ];
      case 'weehawken':
        return [
          "King Avenue", "Park Avenue", "Boulevard East", "Waterfront",
          "Heights", "Uptown", "Downtown"
        ];
      case 'guttenberg':
        return [
          "Galaxy Towers", "Bergenline Avenue", "70th Street", 
          "Broadway", "Bulls Ferry Road", "68th Street"
        ];
      default:
        return ["Downtown", "Uptown", "Main Street", "Business District", "Residential Area"];
    }
  }, [locationSlug]);

  const neighborhoods = getNeighborhoods();

  return (
    <section className="bg-white rounded-xl shadow-sm p-8 md:p-12">
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold text-gray-800">Areas We Serve in {locationName}</h2>
      </div>
      
      <p className="text-lg text-gray-700 mb-8">
        Our locksmith professionals provide fast and reliable service throughout {locationName}, including the following neighborhoods and districts:
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {neighborhoods.map((neighborhood, index) => (
          <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <span className="text-gray-800">{neighborhood}</span>
          </div>
        ))}
      </div>
      
      <p className="text-gray-700 mt-6">
        We're proud to serve the entire {locationName} community with reliable locksmith services. No matter which neighborhood you're in, our technicians can reach you quickly to help with your security needs.
      </p>
    </section>
  );
};

export default ServiceAreaNeighborhoods;
