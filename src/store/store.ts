import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { testApi } from '../services/testApi';
import testReducer from '../slices/testSlice';

export const store = configureStore({
  reducer: {
    [testApi.reducerPath]: testApi.reducer,
    test: testReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(testApi.middleware),
  devTools: !(process.env.NODE_ENV === 'production'),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
