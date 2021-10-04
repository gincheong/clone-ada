import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
// interfaces
import { UserInputProps } from './interfaces';
// styles
import theme from '../../assets/styles';

const UserInput = (props: UserInputProps) => {
  const { placeholder } = props;

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: theme.color.white,
    borderWidth: 1,
    borderColor: theme.color.lightgray,
    borderRadius: 10,
    fontSize: theme.font.small,
    flex: 1,
  },
});

export default UserInput;
