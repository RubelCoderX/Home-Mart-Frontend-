/* eslint-disable @typescript-eslint/no-explicit-any */
import userApi from "@/redux/features/user/userApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  password: string;
  photoUrl: string;
  address: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [createUser] = userApi.useCreateUserMutation();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await createUser(data).unwrap(); // Using unwrap for better error handling
      toast.success(response.message, { position: "top-center" });
      reset();
    } catch (error: any) {
      toast.error(
        error.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Please Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              type="password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Profile URL Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Profile URL
            </label>
            <input
              {...register("photoUrl", { required: "Profile URL is required" })}
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your profile URL"
            />
            {errors.photoUrl && (
              <p className="text-red-500 text-sm">{errors.photoUrl.message}</p>
            )}
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              {...register("address", { required: "Address is required" })}
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your address"
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Already registered?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Please log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
