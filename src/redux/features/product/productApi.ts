import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ search = "", sortBy = "" } = {}) => {
        const params = new URLSearchParams();
        if (sortBy) {
          params.append("sort", sortBy);
        }
        if (search) {
          params.append("search", search);
        }

        return {
          url: "/product",
          method: "GET",
          params,
        };
      },
    }),
    addProduct: builder.mutation({
      query: (data) => {
        return {
          url: "product/create-product",
          method: "POST",
          body: data,
        };
      },
    }),

    getProductById: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export default productApi;
