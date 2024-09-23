import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userData) => {
        return {
          url: "user/register",
          method: "POST",
          body: userData,
        };
      },
      invalidatesTags: ["user"],
    }),
    loginUser: builder.mutation({
      query: (userData) => {
        return {
          url: "auth/login",
          method: "POST",
          body: userData,
        };
      },
      invalidatesTags: ["user"],
    }),
    getMe: builder.query({
      query: () => {
        return {
          url: "auth/get-me",
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
    becomeASeller: builder.mutation({
      query: () => {
        return {
          url: "auth/become-seller",
          method: "PUT",
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export default userApi;
