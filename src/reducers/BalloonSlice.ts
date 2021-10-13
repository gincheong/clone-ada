import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// interfaces
import { BalloonState, Conversation } from './BalloonInterfaces';

const initialState: BalloonState = {
  onMovingNext: false,
  onMovingPrev: false,
  onLoading: false,
  // TODO onError boolean 넣기
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
      answer: '',
    },
  ],
};

const BalloonSlice = createSlice({
  name: 'Balloon',
  initialState,
  reducers: {
    nextConversationStart: (state, action: PayloadAction<string>) => {
      state.onLoading = true;
      state.conversations[state.conversationIdx].answer = action.payload;
    },
    nextConversationSuccess: (state, action: PayloadAction<Conversation>) => {
      state.onLoading = false;
      state.onMovingNext = true;
      state.conversations[++state.conversationIdx] = action.payload;
    },
    nextConversationError: state => {
      state.onLoading = false;
      console.log('error occured');
    },
    nextConversationEnd: state => {
      state.onLoading = false;
      state.onMovingNext = false;
    },
    prevConversationStart: state => {},
    prevConversationSuccess: state => {
      state.onMovingPrev = true;
    },
    prevConversationEnd: state => {
      state.conversations.length = state.conversationIdx--;
      state.onMovingPrev = false;
    },
  },
});

export const BalloonReducer = BalloonSlice.reducer;

export const BalloonAction = BalloonSlice.actions;
