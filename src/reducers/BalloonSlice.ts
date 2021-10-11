import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// interfaces
import { BalloonState, Conversation } from './interfaces';

const initialState: BalloonState = {
  conversationIdx: 0,
  conversations: [
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
  ],
};

const BalloonSlice = createSlice({
  name: 'Balloon',
  initialState,
  reducers: {
    nextConversation: state => {
      state.conversationIdx++;
      // api call

      state.conversations[state.conversationIdx] = {
        bot: `다람쥐 헌 쳇바퀴에 타고파 ${Math.random().toFixed(
          Math.floor(Math.random() * 10),
        )}`,
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
      };
    },
  },
});

export const BalloonReducer = BalloonSlice.reducer;

export const BalloonAction = BalloonSlice.actions;
