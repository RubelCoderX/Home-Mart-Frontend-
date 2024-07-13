import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./features/navbar/navbarSlice";
import { baseApi } from "./api/baseApi";
import productApi from "./features/product/productApi";
import cartReducer from "./features/cartSlice/carSlice";
import productReducer from "./features/product/productSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    navbar: navbarReducer,
    product: productReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
