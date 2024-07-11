import productApi from "@/redux/features/product/productApi";
import { GoArrowRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
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

  const features = data?.data?.slice(0, 4);
  return (
    <div>
      <div className="best-selling-products">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Products Collection
          </h2>
          <Link
            to="/products"
            className="flex items-center text-primary hover:text-primary-dark"
          >
            <span className="mr-2">See All</span>
            <GoArrowRight className="text-xl" />
          </Link>
        </div>

        <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features &&
            features.map((product, index) => (
              <div
                key={index}
                className="product-card bg-white p-4 rounded-lg shadow-lg"
                data-aos="fade-left"
                data-aos-delay="10"
              >
                <img
                  src={product.images[0]} // Assuming the first image is to be displayed
                  alt={product.name}
                  className="product-image w-full h-48 object-cover rounded-t-lg"
                />
                <div className="product-info mt-4">
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <p className="my-2">{product.description}</p>
                  <p className="text-xl font-bold ">${product.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
