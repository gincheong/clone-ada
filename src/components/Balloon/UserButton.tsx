import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// interfaces
import { UserButtonProps } from './interfaces';
// styles
import theme from '../../assets/styles';

const UserButton = (props: UserButtonProps) => {
  const { display, payload } = props;

  return (
    <View>
      <TouchableOpacity onPress={() => console.log(payload)}>
        <Text style={styles.buttonText}>{display}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: theme.color.accent2,
    borderRadius: 15,
    fontSize: theme.font.small,
    color: theme.color.accent2,
  },
});

export default UserButton;
