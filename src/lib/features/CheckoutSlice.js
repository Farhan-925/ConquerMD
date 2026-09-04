import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingAddress: {
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  },
  paymentMethod: "card",
  isProcessing: false,
  orderComplete: false,
};

export const CheckoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    updateShippingAddress: (state, action) => {
      state.shippingAddress = { ...state.shippingAddress, ...action.payload };
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    startCheckoutProcess: (state) => {
      state.isProcessing = true;
    },
    completeOrder: (state) => {
      state.isProcessing = false;
      state.orderComplete = true;
    },
    resetCheckout: () => initialState,
  },
});

export const {
  updateShippingAddress,
  setPaymentMethod,
  startCheckoutProcess,
  completeOrder,
  resetCheckout,
} = CheckoutSlice.actions;

export default CheckoutSlice.reducer;