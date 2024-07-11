import BestSelling from "@/pages/BestSelling/BestSelling";
import HeroSection from "../HeroSection/HeroSection";
import CategroiesProduct from "@/pages/Categories/CategroiesProduct";
import FeaturedProducts from "@/pages/FeaturedProducts/FeaturedProducts";
import Blog from "@/pages/Blog/Blog";
import Testimonial from "@/pages/Testimonial/Testimonial";
import FrequentlyAsk from "@/pages/FrequentlyAsk/FrequentlyAsk";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <div className="container mx-auto">
        <CategroiesProduct></CategroiesProduct>
        <BestSelling></BestSelling>
        <FeaturedProducts></FeaturedProducts>
        <Testimonial></Testimonial>
        <FrequentlyAsk></FrequentlyAsk>
        {/* <Blog></Blog> */}
      </div>
    </>
  );
};

export default Home;
