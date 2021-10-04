import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIndex: 0,
};

const balloonSlice = createSlice({
  name: 'balloon',
  initialState,
  reducers: {
    nextBalloon: state => {
      state.currentIndex += 1;
    },
    prevBalloon: state => {
      state.currentIndex -= 1;
    },
  },
});

export default balloonSlice.reducer;
