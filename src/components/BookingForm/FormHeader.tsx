
interface FormHeaderProps {
  isSubmitting?: boolean;
  customTitle?: string;
  customDescription?: string;
}

const FormHeader = ({ 
  isSubmitting = false,
  customTitle,
  customDescription
}: FormHeaderProps) => {
  const title = customTitle || "Request Service";
  const description = isSubmitting 
    ? "Processing your request..." 
    : (customDescription || "Get a quick response from our team");

  return (
    <div className="text-center mb-6">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
        {title}
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mt-2">
        {description}
      </p>
    </div>
  );
};

export default FormHeader;
