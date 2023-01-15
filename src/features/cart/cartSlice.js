import { createSlice } from "@reduxjs/toolkit";

// local data
import cartItems from "../../cartItems";

// slice is an application feature
// the bigger the project the more slices you create

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({ name: "cart", initialState });

// console.log(cartSlice);

export default cartSlice.reducer;
