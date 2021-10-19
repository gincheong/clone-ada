import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useGlobalize } from 'react-native-globalize';
// screens
import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import LanguageScreen from './SettingScreen/LanguageScreen';
// interfaces
import { StackProps } from './interfaces';
// globalize
import loadScreenMessages from '../globalize/ScreenMessages';

loadScreenMessages();

const Stack = createStackNavigator<StackProps>();

const RootScreen = () => {
  const { formatMessage } = useGlobalize();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={MainScreen}
        />
        <Stack.Screen
          options={{ headerTitle: formatMessage('screen/profile') }}
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{ headerTitle: formatMessage('screen/setting') }}
          name="Setting"
          component={SettingScreen}
        />
        <Stack.Screen
          options={{ headerTitle: formatMessage('screen/language') }}
          name="Language"
          component={LanguageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootScreen;
