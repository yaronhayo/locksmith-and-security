import LoadingSpinner from "@/components/LoadingSpinner";

const MapLoader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100/80">
      <LoadingSpinner />
    </div>
  );
};

export default MapLoader;