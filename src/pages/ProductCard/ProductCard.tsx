import { TProduct } from "@/types";
import { Link } from "react-router-dom";

const ProductCard = ({
  images,
  name,
  description,
  price,
  _id,
  delay,
}: TProduct) => {
  return (
    <div
      className="product-card bg-white p-4 rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
      data-aos="flip-up"
      data-aos-delay={delay}
    >
      <img
        src={images} // Assuming the first image is to be displayed
        alt={name}
        className="product-image w-full h-48 object-cover rounded-t-lg"
      />
      <div className="product-info mt-4">
        <h3 className="text-2xl font-semibold truncate">{name}</h3>
        <p className="my-2 text-gray-600">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold text-primary">${price}</p>
          <Link
            to={`/product-details/${_id}`}
            className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
