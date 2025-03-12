
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ServiceAreaLocation } from '../../service-areas/types';

interface AreasListProps {
  areas: ServiceAreaLocation[];
  hoveredArea: string | null;
  setHoveredArea: (area: string | null) => void;
}

const AreasList = ({ areas, hoveredArea, setHoveredArea }: AreasListProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-8 h-full"
    >
      <h2 className="text-2xl font-semibold mb-6 text-primary">Areas We Serve</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {areas.map((area, index) => (
          <motion.div
            key={area.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredArea(area.slug)}
            onMouseLeave={() => setHoveredArea(null)}
          >
            <Link
              to={`/service-areas/${area.slug}`}
              className={`group flex items-start space-x-3 p-4 rounded-lg transition-all ${
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
              <div>
                <h3 className={`font-medium transition-colors ${
                  hoveredArea === area.slug ? 'text-primary' : 'text-gray-900 group-hover:text-primary'
                }`}>
                  {area.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {area.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AreasList;
