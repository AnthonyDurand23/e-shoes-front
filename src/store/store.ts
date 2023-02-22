import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { testApi } from '../services/testApi';
import interfaceReducer from '../slices/interfaceSlice';

export const store = configureStore({
  reducer: {
    [testApi.reducerPath]: testApi.reducer,
    interface: interfaceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(testApi.middleware),
  devTools: !(process.env.NODE_ENV === 'production'),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
