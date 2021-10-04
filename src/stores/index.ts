// reducers;
import { configureStore } from '@reduxjs/toolkit';
import balloonReducer from '../reducers/balloonReducer';

const store = configureStore({
  reducer: {
    balloonReducer,
  },
});

export default store;
