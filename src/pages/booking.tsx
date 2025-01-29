import PageLayout from "@/components/layouts/PageLayout";
import BookingFeatures from "@/components/booking/BookingFeatures";
import BookingCommitment from "@/components/booking/BookingCommitment";

const BookingPage = () => {
  return (
    <PageLayout
      title="Book Online | Locksmith & Security LLC"
      description="Schedule your locksmith service online. Fast, reliable, and professional service available 24/7 in North Bergen and surrounding areas."
      schema={{
        "@type": "Service",
        "serviceType": "Locksmith",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Locksmith & Security LLC",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "North Bergen",
            "addressRegion": "NJ"
          }
        }
      }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold">Why Book Online?</h2>
              <p className="text-lg text-gray-600">
                Schedule your locksmith service at your convenience. Our online booking system ensures a smooth and efficient process for all your security needs.
              </p>
            </div>

            <BookingFeatures />
            <BookingCommitment />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Book Your Service</h2>
            <iframe 
              src="REPLACE_WITH_YOUR_BOOKING_FORM_URL"
              className="w-full min-h-[600px] border-0"
              title="Booking Form"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BookingPage;