import PageLayout from "@/components/layouts/PageLayout";
import ReviewCard from "@/components/reviews/ReviewCard";
import { reviews } from "@/data/reviewsData";

const ReviewsPage = () => {
  return (
    <PageLayout
      title="Customer Reviews"
      description="See what our satisfied customers have to say about our locksmith services"
      heroTitle="Customer Testimonials"
      heroDescription="Read reviews from our valued customers in North Bergen and surrounding areas"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default ReviewsPage;