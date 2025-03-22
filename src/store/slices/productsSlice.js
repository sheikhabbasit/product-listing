import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.list = [...state.list, ...action.payload];
    },
  },
});

export const { addProducts } = productsSlice.actions;

export default productsSlice;
