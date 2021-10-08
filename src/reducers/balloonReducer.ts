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
  ],
  // prevChat: {},
  // currentChat: {
  //   bot: 'Ada provides a general symptom assessment, whatever your symptoms and will also consider Covid-19 where relevant. For up-to-date guidance specific to Covid-19, please use the WHO website.',
  //   type: 'button',
  //   user: [
  //     { display: 'Learn more on the WHO website', payload: 'open who' },
  //     { display: 'Continue using Ada', payload: 'coninue' },
  //   ],
  // },
};

const balloonSlice = createSlice({
  name: 'balloon',
  initialState,
  reducers: {
    // debug
    addBalloon: state => {
      state.currentIndex += 1;
      console.log('add');
      state.data = [
        ...state.data,
        {
          bot: `What is your name? ${state.currentIndex}`,
          type: 'input',
          user: {
            placeholder: 'write your name',
          },
        },
      ];
      // state.currentChat = {
      //   bot: `What is your name? ${state.currentIndex}`,
      //   type: 'input',
      //   user: {
      //     placeholder: 'write your name',
      //   },
      // };
    },
    initBalloon: state => {
      state.currentIndex = 0;
      console.log('init');
      // state.currentChat = initialState.currentChat;
      state.data = initialState.data;
    },
  },
});

export default balloonSlice.reducer;

export const balloonAction = balloonSlice.actions;
