import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// interfaces
import { StackProps } from './interfaces';

const ProfileScreen = ({
  navigation,
}: StackScreenProps<StackProps, 'Profile'>) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Go to back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
