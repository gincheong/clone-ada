import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
// interfaces
import { StackProps } from '../interfaces';
import { StyleSheet, View } from 'react-native';
// styles
import LanguageList from '../../components/LanguageList/LanguageList';

const LanguageScreen = ({
  navigation,
}: StackScreenProps<StackProps, 'Language'>) => {
  return (
    <View style={styles.container}>
      <LanguageList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    paddingBottom: 80,
  },
});

export default LanguageScreen;
