import { baseApi } from "@/redux/api/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.mutation({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
    }),
  }),
});
