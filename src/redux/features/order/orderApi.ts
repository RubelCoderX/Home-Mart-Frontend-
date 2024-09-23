import { baseApi } from "@/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    paymentOrder: builder.mutation({
      query: (data) => {
        return {
          url: "order/create-order",
          method: "POST",
          body: data,
        };
      },

      invalidatesTags: ["product"],
    }),
    getAllOrders: builder.query({
      query: () => {
        return {
          url: "order/get-order",
          method: "get",
        };
      },
    }),
    getMyOrder: builder.query({
      query: () => {
        return {
          url: "order/my-order",
          method: "GET",
        };
      },
    }),
  }),
});

export default orderApi;
