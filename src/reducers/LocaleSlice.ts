import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// interfaces
import { languages, LocaleState } from './LocaleInterfaces';

const initialState: LocaleState = {
  locale: 'ko',
};

const LocaleSlice = createSlice({
  name: 'Locale',
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<keyof typeof languages>) => {
      state.locale = action.payload;
    },
  },
});

export const LocaleReducer = LocaleSlice.reducer;

export const LocaleAction = LocaleSlice.actions;
