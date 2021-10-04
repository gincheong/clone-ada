import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// interfaces
import { StackProps } from './interfaces';

const ProfileScreen = ({
  navigation,
}: StackScreenProps<StackProps, 'Profile'>) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button title="Go to back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProfileScreen;
