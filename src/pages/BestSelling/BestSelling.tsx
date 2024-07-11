import productApi from "@/redux/features/product/productApi";
import AOS from "aos";
import "aos/dist/aos.css";

import "./BestSelling.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
const BestSelling = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const { data, error, isLoading } =
    productApi.useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  const products = data?.data?.slice(0, 3);

  return (
    <div className="best-selling-products ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold">Recommended Products</h2>
        <Link
          to="/products"
          className="flex items-center text-primary hover:text-primary-dark"
        >
          <span className="mr-2">See All</span>
          <GoArrowRight className="text-xl" />
        </Link>
      </div>
      <div className="products-grid">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card"
            data-aos="fade-left"
            data-aos-delay="10"
          >
            <img
              src={product.images}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="text-2xl font-semibold">{product.name}</h3>
              <p className="my-2">{product.description}</p>
              <p className="text-xl font-bold ">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="view-more-container text-center mt-6">
        <a
          href="/products"
          className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition duration-300"
        >
          View More
        </a>
      </div> */}
    </div>
  );
};

export default BestSelling;
