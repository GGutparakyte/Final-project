/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = cartSlice.actions;

export const cartProductCountSelector = (state) => state.cart.products.length;
export const cartProductsSelector = (state) => state.cart.products;
export default cartSlice.reducer;
