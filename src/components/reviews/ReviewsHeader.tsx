const ReviewsHeader = ({ location }: { location?: string }) => {
  return (
    <h2 className="text-3xl font-bold text-center mb-12">
      {location ? `Customer Reviews in ${location}` : 'Customer Reviews'}
    </h2>
  );
};

export default ReviewsHeader;