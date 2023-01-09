import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { reducer as userReducer } from './examples/domains/userSlice';
import { reducer as counterReducer } from './examples/domains/globalCounterSlice';
import { apiSlice } from './examples/api';

const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export { store, type AppDispatch, type RootState, type AppThunk };
