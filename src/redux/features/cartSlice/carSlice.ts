// src/redux/features/cart/cartSlice.ts

import { TProduct } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = TProduct & {
  quantity: number;
  totalQuantity: number;
};

type CartState = {
  items: CartItem[];
  totalQuantity: number;
};

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item._id === product._id);

      if (existingItem) {
        if (existingItem.quantity < product.stock) {
          existingItem.quantity += 1;
        }
      } else {
        state.items.push({
          ...product,
          quantity: 1,
          totalQuantity: 0,
        });
      }
      state.totalQuantity++;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    updateCartQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item._id === id);

      if (existingItem && quantity <= existingItem.stock) {
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
