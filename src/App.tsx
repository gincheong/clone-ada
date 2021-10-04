import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// store
import store from './stores';
// screens
import MainScreen from './screens/MainScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';
// interfaces
import { StackProps } from './screens/interfaces';
// styles
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator<StackProps>();

const App = () => {
  const isDarkMode = useColorScheme();

  return (
    <Provider store={store}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Main"
            component={MainScreen}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Setting" component={SettingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
