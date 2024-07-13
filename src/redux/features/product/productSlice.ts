import { TProduct } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductState = {
  products: TProduct[];
  product: TProduct | null;
};

const initialState: ProductState = {
  products: [],
  product: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      state.products.push({ ...action.payload });
    },
    setProducts: (state, action: PayloadAction<TProduct[]>) => {
      state.products = action.payload;
    },
    setProduct: (state, action: PayloadAction<TProduct>) => {
      state.product = action.payload;
    },
  },
});

export const { addProduct, setProducts, setProduct } = productSlice.actions;

export default productSlice.reducer;
