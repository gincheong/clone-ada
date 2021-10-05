import { createSlice } from '@reduxjs/toolkit';
// interfaces
import { balloonState } from './interfaces';

const initialState: balloonState = {
  currentIndex: 0,
  data: [
    {
      bot: 'Ada provides a general symptom assessment, whatever your symptoms and will also consider Covid-19 where relevant. For up-to-date guidance specific to Covid-19, please use the WHO website.',
      type: 'button',
      user: [
        { display: 'Learn more on the WHO website', payload: 'open who' },
        { display: 'Continue using Ada', payload: 'coninue' },
      ],
    },
    {
      bot: 'What is your name?',
      type: 'input',
      user: {
        placeholder: 'write your name',
      },
    },
  ],
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
