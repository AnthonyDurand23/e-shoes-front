import { CartProduct, ProductType } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  products: ProductType[];
  cart: CartProduct[];
  nbProductsCart: number;
  totalPriceCart: number;
}

const initialState: DataState = {
  products: [],
  cart: [],
  nbProductsCart: 0,
  totalPriceCart: 0,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
    getCartFromLocalStorage: (state) => {
      state.cart = JSON.parse(localStorage.getItem('cart') || '') || [];
      state.nbProductsCart = state.cart.map(({ quantity }) => quantity).reduce((a, b) => a + b, 0);
      state.totalPriceCart = state.cart.map(({ price, quantity }) => price * quantity).reduce((a, b) => a + b, 0);
    },
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      state.cart = [...state.cart, action.payload];
      state.nbProductsCart = state.cart.map(({ quantity }) => quantity).reduce((a, b) => a + b);
      state.totalPriceCart = state.cart.map(({ price, quantity }) => price * quantity).reduce((a, b) => a + b);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    addEvenProductAndSizeToCart: (state, action: PayloadAction<{ reference: string; size: number }>) => {
      state.cart = state.cart.map((product) => {
        if (action.payload.reference === product.reference && action.payload.size === product.size)
          return { ...product, quantity: product.quantity + 1 };
        else return product;
      });
      state.nbProductsCart = state.cart.map(({ quantity }) => quantity).reduce((a, b) => a + b);
      state.totalPriceCart = state.cart.map(({ price, quantity }) => price * quantity).reduce((a, b) => a + b);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    modifySizeCartProduct: (state, action: PayloadAction<{ productIndex: number; size: number }>) => {
      state.cart = state.cart.map((product, index) => {
        if (action.payload.productIndex !== index) return product;
        else return { ...product, size: action.payload.size };
      });
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    modifyQuantityCartProduct: (state, action: PayloadAction<{ productIndex: number; quantity: number }>) => {
      state.cart = state.cart.map((product, index) => {
        if (action.payload.productIndex !== index) return product;
        else return { ...product, quantity: action.payload.quantity };
      });
      state.nbProductsCart = state.cart.map(({ quantity }) => quantity).reduce((a, b) => a + b);
      state.totalPriceCart = state.cart.map(({ price, quantity }) => price * quantity).reduce((a, b) => a + b);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    deleteProductToCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((_, index) => index !== action.payload);
      state.nbProductsCart = state.cart.map(({ quantity }) => quantity).reduce((a, b) => a + b, 0);
      state.totalPriceCart = state.cart.map(({ price, quantity }) => price * quantity).reduce((a, b) => a + b, 0);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    deleteCart: (state) => {
      state.cart = [];
      state.nbProductsCart = state.totalPriceCart = 0;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const {
  getProducts,
  getCartFromLocalStorage,
  addToCart,
  modifySizeCartProduct,
  modifyQuantityCartProduct,
  addEvenProductAndSizeToCart,
  deleteProductToCart,
  deleteCart,
} = dataSlice.actions;

export default dataSlice.reducer;
