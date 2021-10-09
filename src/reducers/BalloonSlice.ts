import { createSlice } from '@reduxjs/toolkit';
// interfaces
import { BalloonState } from './interfaces';

const initialState: BalloonState = {
  conversation: [
    {
      bot: 'The quick brown fox jumps over the lazy dog.',
      user: {
        type: 'button',
        data: [
          {
            display: 'This is Button 1',
            value: 'Button 1 value',
          },
          {
            display: 'This is Button 2',
            value: 'Button 2 value',
          },
        ],
      },
    },
    {
      bot: '다람쥐 헌 쳇바퀴에 타고파.',
      user: {
        type: 'input',
        data: {
          placeholder: 'this is a placeholder',
        },
      },
    },
  ],
};

const BalloonSlice = createSlice({
  name: 'Balloon',
  initialState,
  reducers: {},
});

export const BalloonReducer = BalloonSlice.reducer;

export const BalloonAction = BalloonSlice.actions;
