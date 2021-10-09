import React from 'react';
import { View } from 'react-native';
// Components
import Bot from './Bot';
import User from './User';

const Balloon = () => {
  return (
    <View>
      <Bot />
      <User />
    </View>
  );
};

export default Balloon;
