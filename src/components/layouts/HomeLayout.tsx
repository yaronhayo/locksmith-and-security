
import Header from "../Header";
import Footer from "../Footer";
import HomeContent from "../sections/home/HomeContent";
import MetaTags from "./MetaTags";

const HomeLayout = () => {
  return (
    <div className="relative min-h-screen">
      <MetaTags 
        title="24/7 Locksmith Services in North Bergen, NJ"
        description="Professional locksmith services in North Bergen. Fast response, reliable service for residential, commercial & automotive needs. Available 24/7."
      />
      <Header />
      <main>
        <HomeContent />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
