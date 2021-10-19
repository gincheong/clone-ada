import React from 'react';
import { GlobalizeProvider, loadCldr } from 'react-native-globalize';
import { useSelector } from 'react-redux';
// screens
import RootScreen from '../screens/RootScreen';
// interfaces
import { RootState } from '../stores';
// globalize
import loadBasicMessages from '../globalize/BasicMessages';

loadCldr(
  require('react-native-globalize/locale-data/en'),
  require('react-native-globalize/locale-data/ko'),
);

loadBasicMessages();

const Root = () => {
  const { locale } = useSelector((state: RootState) => state.LocaleReducer);

  return (
    <GlobalizeProvider locale={locale}>
      <RootScreen />
    </GlobalizeProvider>
  );
};

export default Root;
