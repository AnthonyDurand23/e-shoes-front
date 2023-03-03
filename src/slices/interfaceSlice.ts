import { createSlice } from '@reduxjs/toolkit';

interface InterfaceState {
  isMobileMenuModalOpen: boolean;
  isCartModalOpen: boolean;
}

const initialState: InterfaceState = {
  isMobileMenuModalOpen: false,
  isCartModalOpen: false,
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
  },
});

export const { openMobileMenuModal, closeMobileMenuModal, openCartModal, closeCartModal } = interfaceSlice.actions;

export default interfaceSlice.reducer;
