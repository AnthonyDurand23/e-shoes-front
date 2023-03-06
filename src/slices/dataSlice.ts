import { CartProduct, ProductType } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  products: ProductType[];
  cart: CartProduct[];
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
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      state.cart = [...state.cart, action.payload];
    },
    modifySizeCartItem: (state, action: PayloadAction<{ productIndex: number; size: number }>) => {
      state.cart = state.cart.map((product, index) => {
        if (action.payload.productIndex !== index) return product;
        else return { ...product, size: action.payload.size };
      });
    },
  },
});

export const { getProducts, addToCart, modifySizeCartItem } = dataSlice.actions;

export default dataSlice.reducer;
