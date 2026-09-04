import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);

      if (item) {
        if (type === "increase") {
          item.quantity += 1;
        } else if (type === "decrease" && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;