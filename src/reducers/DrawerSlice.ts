import { createSlice } from '@reduxjs/toolkit';
// interfaces
import { DrawerState } from './DrawerInterfaces';

const initialState: DrawerState = {
  isDrawerOpened: false,
};

const DrawerSlice = createSlice({
  name: 'Drawer',
  initialState,
  reducers: {
    openDrawer: state => {
      state.isDrawerOpened = true;
    },
    closeDrawer: state => {
      state.isDrawerOpened = false;
    },
  },
});

export const DrawerReducer = DrawerSlice.reducer;

export const DrawerAction = DrawerSlice.actions;
