import { configureStore } from '@reduxjs/toolkit';
// reducers
import { BalloonReducer } from '../reducers/BalloonSlice';

const store = configureStore({
  reducer: {
    BalloonReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
