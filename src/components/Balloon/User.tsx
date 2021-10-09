import React from 'react';
import { StyleSheet, View } from 'react-native';
// components
import UserButton from './UserButton';
import UserInput from './UserInput';
// interfaces
import { UserProps } from './interfaces';
import { Button, Input } from '../../reducers/interfaces';
// styles
import theme from '../../assets/theme';

const User = (props: UserProps) => {
  const {
    message: { data, type },
  } = props;

  const render = () => {
    switch (type) {
      case 'button':
        return <UserButton button={data as Button[]} />;
      case 'input':
        return <UserInput input={data as Input} />;
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
