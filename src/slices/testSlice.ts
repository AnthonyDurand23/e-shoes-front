import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TestState {
  rate: number | null;
}

const initialState: TestState = {
  rate: null,
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setRate: (state, action: PayloadAction<number>) => {
      state.rate = action.payload;
    },
  },
});

export const { setRate } = testSlice.actions;

export default testSlice.reducer;
