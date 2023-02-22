import { createSlice } from '@reduxjs/toolkit';

interface InterfaceState {
  isMobileMenuModalOpen: boolean;
}

const initialState: InterfaceState = {
  isMobileMenuModalOpen: false,
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
  },
});

export const { openMobileMenuModal, closeMobileMenuModal } = interfaceSlice.actions;

export default interfaceSlice.reducer;
