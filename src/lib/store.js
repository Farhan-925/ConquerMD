import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/CounterSlice";
import CartReducer from "./features/CartSlice";
import CheckoutReducer from "./features/CheckoutSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counterStore: CounterReducer,
      cart: CartReducer,
      checkout: CheckoutReducer,
    },
  });
};