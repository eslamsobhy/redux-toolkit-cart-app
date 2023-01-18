import { createSlice } from "@reduxjs/toolkit";

// local data
import cartItems from "../../cartItems";

// slice is an application feature
// the bigger the project the more slices you create

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      // we still can return a state, BUT don't forget to spread the old state first!
      // return { ...state, cartItems: [] };
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseAmount: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount += 1;
    },
    decreaseAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount -= 1;
    },
  },
});

// console.log(cartSlice);

export const { clearCart, removeItem, increaseAmount, decreaseAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
