import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import News from "../components/News";
import Programs from "../components/Programs";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Programs />
      <News />
      <Stats />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
