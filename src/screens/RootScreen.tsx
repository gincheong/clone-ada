import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GlobalizeProvider, loadCldr } from 'react-native-globalize';
// screens
import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import LanguageScreen from './SettingScreen/LanguageScreen';
// interfaces
import { RootState } from '../stores';
import { StackProps } from './interfaces';

loadCldr(
  require('react-native-globalize/locale-data/en'),
  require('react-native-globalize/locale-data/ko'),
);

const Stack = createStackNavigator<StackProps>();

const RootScreen = () => {
  const { locale } = useSelector((state: RootState) => state.LocaleReducer);

  return (
    <GlobalizeProvider locale={locale}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Main"
            component={MainScreen}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Setting" component={SettingScreen} />
          <Stack.Screen name="Language" component={LanguageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalizeProvider>
  );
};

export default RootScreen;
