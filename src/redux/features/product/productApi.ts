import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ search, sortBy, category }) => {
        const params = new URLSearchParams();
        if (sortBy) {
          params.append("sort", sortBy);
        }
        if (search) {
          params.append("search", search);
        }
        if (category) {
          params.append("category", category);
        }

        return {
          url: "/product",
          method: "GET",
          params,
        };
      },
      providesTags: ["product"],
    }),

    addProduct: builder.mutation({
      query: (data) => {
        return {
          url: "product/create-product",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: ({ productId, data }) => {
        return {
          url: `product/${productId}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),

    getProductById: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (productId: string) => {
        console.log(productId);
        return { url: `/product/${productId}`, method: "DELETE" };
      },
      invalidatesTags: ["product"],
    }),
  }),
});

export default productApi;
