import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// interfaces
import { Locales, LocaleState } from './LocaleInterfaces';
import { DefaultValue } from '../asyncStorage/interfaces';

const initialState: LocaleState = {
  locale: DefaultValue.locale,
};

const LocaleSlice = createSlice({
  name: 'Locale',
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<Locales>) => {
      state.locale = action.payload;
    },
  },
});

export const LocaleReducer = LocaleSlice.reducer;

export const LocaleAction = LocaleSlice.actions;
