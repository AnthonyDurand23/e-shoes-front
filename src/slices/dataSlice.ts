import { CartItem, ProductType } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  products: ProductType[];
  cart: CartItem[];
}

const initialState: DataState = {
  products: [],
  cart: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { getProducts, addToCart } = dataSlice.actions;

export default dataSlice.reducer;
