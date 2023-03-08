import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InterfaceState {
  isMobileMenuModalOpen: boolean;
  isCartModalOpen: boolean;
  onHoverCartLink: boolean;
}

const initialState: InterfaceState = {
  isMobileMenuModalOpen: false,
  isCartModalOpen: false,
  onHoverCartLink: false,
};

export const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    openMobileMenuModal: (state) => {
      state.isMobileMenuModalOpen = true;
    },
    closeMobileMenuModal: (state) => {
      state.isMobileMenuModalOpen = false;
    },
    openCartModal: (state) => {
      state.isCartModalOpen = true;
    },
    closeCartModal: (state) => {
      state.isCartModalOpen = false;
    },
    setOnHoverCartLink: (state, action: PayloadAction<boolean>) => {
      state.onHoverCartLink = action.payload;
    },
  },
});

export const { openMobileMenuModal, closeMobileMenuModal, openCartModal, closeCartModal, setOnHoverCartLink } =
  interfaceSlice.actions;

export default interfaceSlice.reducer;
