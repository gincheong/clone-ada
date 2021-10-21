import React from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useGlobalize } from 'react-native-globalize';
// actions
import { LocaleAction } from '../reducers/LocaleSlice';
// screens
import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import LanguageScreen from './SettingScreen/LanguageScreen';
// interfaces
import { StackProps } from './interfaces';
import { Locales } from '../reducers/LocaleInterfaces';
// storage
import { getStorageData } from '../asyncStorage/AsyncStorage';
// globalize
import loadScreenMessages from '../globalize/ScreenMessages';

loadScreenMessages();

const Stack = createStackNavigator<StackProps>();

const RootScreen = () => {
  const { formatMessage } = useGlobalize();
  const dispatch = useDispatch();

  // * Load AsyncStorage
  React.useEffect(() => {
    const initializeLocale = async () => {
      const storageLocale = (await getStorageData('locale')) as Locales;
      dispatch(LocaleAction.setLocale(storageLocale));
    };
    initializeLocale();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          options={{
            headerShown: false,
            headerTitle: formatMessage('screen/main'),
          }}
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
