import React from 'react';
import { StyleSheet, View } from 'react-native';
// components
import UserButton from './UserButton';
import UserInput from './UserInput';
// interfaces
import { UserProps } from './interfaces';
// styles
import theme from '../../assets/theme';

const User = (props: UserProps) => {
  const {
    user: { type },
  } = props;

  const render = () => {
    switch (type) {
      case 'button':
        return <UserButton {...props} />;
      case 'input':
        return <UserInput {...props} />;
    }
  };

  return <View style={styles.container}>{render()}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    margin: 10,
    marginLeft: 'auto',
    width: '70%',
    padding: 10,
  },
  userText: {
    fontSize: theme.font.normal,
  },
});

export default User;
