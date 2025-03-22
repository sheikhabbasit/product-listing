import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.product = action.payload;
    },
    removeProduct: (state) => {
      state.product = {};
    },
  },
});

export const { addProduct, removeProduct } = productDetailSlice.actions;

export default productDetailSlice;
