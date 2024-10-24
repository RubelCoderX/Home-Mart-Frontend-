/* eslint-disable @typescript-eslint/no-explicit-any */
import userApi from "@/redux/features/user/userApi";
import { setUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const [loginUser] = userApi.useLoginUserMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data).unwrap();

      verifyToken(res.data.accessToken);
      dispatch(setUser({ user: res.data.user, token: res.data.accessToken }));
      toast.success("Login successfully", {
        duration: 2000,
        position: "top-center",
      });
      navigate("/");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message, { position: "top-center" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {/* Ensure that the message is a string */}
                {typeof errors.email.message === "string" &&
                  errors.email.message}
              </span>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 ${
                errors.password ? "border-red-500" : ""
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {/* Ensure that the message is a string */}
                {typeof errors.password.message === "string" &&
                  errors.password.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Additional Options */}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-indigo-500 hover:underline">
              Sign up
            </a>
          </p>
          <p className="text-gray-600 mt-2">
            Forgot your password?{" "}
            <a
              href="/reset-password"
              className="text-indigo-500 hover:underline"
            >
              Reset it here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
