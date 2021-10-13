import { createSlice } from '@reduxjs/toolkit';
// interfaces
import { DrawerState } from './DrawerInterfaces';

const initialState: DrawerState = {
  isOpened: false,
};

const DrawerSlice = createSlice({
  name: 'Drawer',
  initialState,
  reducers: {
    openDrawer: state => {
      state.isOpened = true;
    },
    closeDrawer: state => {
      state.isOpened = false;
    },
  },
});

export const DrawerReducer = DrawerSlice.reducer;

export const DrawerAction = DrawerSlice.actions;
