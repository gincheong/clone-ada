import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
// store
import store from './src/stores';

import Root from './src/components/Root';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Root />
    </Provider>
  );
}
