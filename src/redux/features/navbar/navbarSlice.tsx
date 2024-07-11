import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TNavbar = {
  isMenuOpen: boolean;
  isSticky: boolean;
};
const initialState: TNavbar = {
  isMenuOpen: false,
  isSticky: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggoleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setSticky: (state, action: PayloadAction<boolean>) => {
      state.isSticky = action.payload;
    },
  },
});

export const { toggoleMenu, setSticky } = navbarSlice.actions;

export default navbarSlice.reducer;
