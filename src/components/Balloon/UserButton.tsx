import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// interfaces
import { UserButtonProps } from './interfaces';
// styles
import theme from '../../assets/theme';

const UserButton = (props: UserButtonProps) => {
  const { button } = props;

  const onPressButton = (value: string) => {
    console.log(value);
  };

  return (
    <View>
      {button.map((each, idx) => (
        <TouchableOpacity
          key={each.value + idx}
          style={styles.button}
          onPress={() => onPressButton(each.value)}>
          <Text style={styles.text}>{each.display}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: theme.color.accent2,
    borderRadius: 15,
  },
  text: {
    fontSize: theme.font.normal,
    color: theme.color.accent2,
  },
});

export default UserButton;
