
import Header from "../Header";
import Footer from "../Footer";
import HomeContent from "../sections/home/HomeContent";
import MetaTags from "./MetaTags";

const HomeLayout = () => {
  return (
    <div className="relative min-h-screen">
      <MetaTags />
      <Header />
      <main>
        <HomeContent />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
