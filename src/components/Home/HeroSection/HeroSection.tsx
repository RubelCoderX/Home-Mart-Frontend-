import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./HeroSection.css"; // Ensure this file exists for custom styles

import slide1 from "../../../assets/sliderImag/slider1.jpg";
import slide2 from "../../../assets/sliderImag/slide2.jpg";
import slide3 from "../../../assets/sliderImag/slide3.jpg";
import slide4 from "../../../assets/sliderImag/slide4.jpg";

const HeroSection = () => {
  const slides = [
    {
      image: slide1,
      title: "Explore Our Camper Collection",
      description: "Discover the perfect camper for your next adventure.",
      buttonText: "Shop Now",
      buttonLink: "/products",
      aboutUsText: "About Us",
      aboutUsLink: "/about-us",
    },
    {
      image: slide2,
      title: "Quality Campers for Every Journey",
      description: "Browse our selection of reliable and comfortable campers.",
      buttonText: "Shop Now",
      buttonLink: "/products",
      aboutUsText: "About Us",
      aboutUsLink: "/about-us",
    },
    {
      image: slide3,
      title: "Start Your Adventure Today",
      description: "Get ready to hit the road with our premium camper options.",
      buttonText: "Shop Now",
      buttonLink: "/products",
      aboutUsText: "About Us",
      aboutUsLink: "/about-us",
    },
    {
      image: slide4,
      title: "Find Your Dream Camper",
      description: "Explore our camper range and plan your next getaway.",
      buttonText: "Shop Now",
      buttonLink: "/products",
      aboutUsText: "About Us",
      aboutUsLink: "/about-us",
    },
  ];

  return (
    <div className="hero-section mt-16">
      <Carousel
        className="main-slide"
        // autoPlay={true}
        interval={3000}
        infiniteLoop={true}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] md:h-[600px] lg:h-[900px] object-cover"
            />
            <div className="slide-content absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
              <h1 className="text-2xl md:text-4xl  lg:text-5xl font-bold">
                {slide.title}
              </h1>
              <p className="text-sm md:text-lg lg:text-xl mt-2">
                {slide.description}
              </p>
              <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                <a
                  href={slide.buttonLink}
                  className="bg-primary text-white py-2 px-4 md:px-6 rounded-md hover:bg-primary-dark transition duration-300"
                >
                  {slide.buttonText}
                </a>
                <a
                  href={slide.aboutUsLink}
                  className="border border-white text-[#027BFF] py-2 px-4 md:px-6 rounded-md hover:bg-white hover:text-primary transition duration-300"
                >
                  {slide.aboutUsText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
