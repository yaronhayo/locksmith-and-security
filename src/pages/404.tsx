import PageLayout from "@/components/layouts/PageLayout";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

const NotFoundPage = () => {
  return (
    <PageLayout
      title="Page Not Found"
      description="The page you're looking for doesn't exist or has been moved."
    >
      <div className="min-h-[60vh] flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <FileQuestion className="w-16 h-16 text-primary mx-auto" />
          <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Please check the URL or navigate back to our homepage.
          </p>
          <Button asChild size="lg">
            <a href="/">Return to Homepage</a>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;