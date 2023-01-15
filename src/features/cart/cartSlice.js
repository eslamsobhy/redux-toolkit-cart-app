import { createSlice } from "@reduxjs/toolkit";

// slice is an application feature
// the bigger the project the more slices you create

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({ name: "cart", initialState });

// console.log(cartSlice);

export default cartSlice.reducer;
