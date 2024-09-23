import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "@/redux/features/cartSlice/carSlice";
import orderApi from "@/redux/features/order/orderApi";
import { useAppSelector } from "@/redux/hook";

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: "cashOnDelivery";
};

const OrderComplete = () => {
  const cartItem = useAppSelector((state) => state.cart);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentOrder] = orderApi.usePaymentOrderMutation();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Merge form data with cart item details
    const order = {
      ...cartItem,
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      paymentMethod: data.paymentMethod,
    };

    // Send the order to the backend
    paymentOrder(order)
      .unwrap()
      .then(() => {
        // Clear the cart after successful order
        dispatch(clearCart());
        // Redirect to success page
        navigate("/success");
      })
      .catch((error) => {
        console.error("Order failed:", error);
      });
  };

  return (
    <div className="container mx-auto mt-40">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col">
          <label className="mb-1">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="border p-2 rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            className="border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Phone</label>
          <input
            {...register("phone", { required: "Phone number is required" })}
            className="border p-2 rounded"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Delivery Address</label>
          <textarea
            {...register("address", { required: "Address is required" })}
            className="border p-2 rounded"
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Payment Method</label>
          <div className="flex items-center">
            <input
              type="radio"
              value="cashOnDelivery"
              {...register("paymentMethod", {
                required: "Payment method is required",
              })}
              className="mr-2"
            />
            <label>Cash on Delivery</label>
          </div>
          {errors.paymentMethod && (
            <p className="text-red-500">{errors.paymentMethod.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="mt-4 w-full px-6 py-3 rounded bg-green-500 text-white"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};
export default OrderComplete;
