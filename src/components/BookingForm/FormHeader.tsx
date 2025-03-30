interface FormHeaderProps {
  isSubmitting: boolean;
}

const FormHeader = ({ isSubmitting }: FormHeaderProps) => {
  return (
    <div className="text-center mb-6">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
        Request Service
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mt-2">
        {isSubmitting ? "Processing your request..." : "Get a quick response from our team"}
      </p>
    </div>
  );
};

export default FormHeader;