import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
// interfaces
import { UserInputProps } from './interfaces';
// styles
import theme from '../../assets/theme';

const UserInput = (props: UserInputProps) => {
  const { input } = props;

  return (
    <View>
      <TextInput style={styles.input} placeholder={input.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: theme.font.normal,
    margin: 10,
  },
});

export default UserInput;
