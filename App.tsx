import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
// store
import store from './src/stores';
// screens
import RootScreen from './src/screens/RootScreen';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <RootScreen />
    </Provider>
  );
}
