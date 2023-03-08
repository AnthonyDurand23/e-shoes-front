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
    addEvenProductAndSizeToCart: (state, action: PayloadAction<{ reference: string; size: number }>) => {
      state.cart = state.cart.map((product) => {
        if (action.payload.reference === product.reference && action.payload.size === product.size)
          return { ...product, quantity: product.quantity + 1 };
        else return product;
      });
    },
    modifySizeCartProduct: (state, action: PayloadAction<{ productIndex: number; size: number }>) => {
      state.cart = state.cart.map((product, index) => {
        if (action.payload.productIndex !== index) return product;
        else return { ...product, size: action.payload.size };
      });
    },
    modifyQuantityCartProduct: (state, action: PayloadAction<{ productIndex: number; quantity: number }>) => {
      state.cart = state.cart.map((product, index) => {
        if (action.payload.productIndex !== index) return product;
        else return { ...product, quantity: action.payload.quantity };
      });
    },
    deleteProductToCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((_, index) => index !== action.payload);
    },
  },
});

export const {
  getProducts,
  addToCart,
  modifySizeCartProduct,
  modifyQuantityCartProduct,
  addEvenProductAndSizeToCart,
  deleteProductToCart,
} = dataSlice.actions;

export default dataSlice.reducer;
