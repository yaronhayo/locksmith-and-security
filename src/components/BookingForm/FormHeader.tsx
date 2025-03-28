
interface FormHeaderProps {
  isSubmitting?: boolean;
  title?: string;
  description?: string;
}

const FormHeader = ({ 
  isSubmitting = false, 
  title = "Request Service",
  description 
}: FormHeaderProps) => {
  const defaultDescription = isSubmitting 
    ? "Processing your request..." 
    : "Get a quick response from our team";
  
  return (
    <div className="text-center mb-6">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
        {title}
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mt-2">
        {description || defaultDescription}
      </p>
    </div>
  );
};

export default FormHeader;
