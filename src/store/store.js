import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import productDetailSlice from "./slices/activeProductSlice";

const allReducer = {
  products: productsSlice.reducer,
  productDetail: productDetailSlice.reducer,
};

export const store = configureStore({
  reducer: allReducer,
});
