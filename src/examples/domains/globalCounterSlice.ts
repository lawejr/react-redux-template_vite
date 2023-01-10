import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '~/store';

interface CounterState {
  value: number;
  status: 'pristine' | 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'pristine',
};

const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  },
);

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (immeredState: CounterState) => {
      immeredState.value += 1;
      immeredState.status = 'idle';
    },
    decrement: (immeredState: CounterState) => {
      immeredState.value -= 1;
      immeredState.status = 'idle';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, immeredState => {
        immeredState.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (immeredState, action) => {
        immeredState.status = 'idle';
        immeredState.value += action.payload;
      })
      .addCase(incrementAsync.rejected, immeredState => {
        immeredState.status = 'failed';
      });
  },
});

const selectCount = (state: RootState) => state.counter.value;
const selectCountStatus = (state: RootState) => state.counter.status;

const { increment, decrement } = counterSlice.actions;
const { reducer } = counterSlice;

function fetchCount(amount = 1) {
  return new Promise<{ data: number }>(resolve => {
    setTimeout(() => {
      resolve({ data: amount });
    }, 500);
  });
}

export {
  type CounterState,
  incrementAsync,
  counterSlice,
  selectCount,
  selectCountStatus,
  increment,
  decrement,
  reducer,
};
