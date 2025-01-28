interface MapErrorProps {
  error: string;
}

const MapError = ({ error }: MapErrorProps) => {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-50 rounded-lg">
      <div className="flex flex-col items-center gap-2 text-red-500">
        <p>Error loading map: {error}</p>
      </div>
    </div>
  );
};

export default MapError;