import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// omponents
import UserButton from './UserButton';
import UserInput from './UserInput';
// interfaces
import { BalloonProps, UserButtonProps, UserInputProps } from './interfaces';
// styles
import theme from '../../assets/styles';

const Balloon = (props: BalloonProps) => {
  const { bot, user, type } = props;

  return (
    <View style={styles.container}>
      <View style={{ ...styles.common, ...styles.botContainer }}>
        <Text style={styles.botText}>{bot}</Text>
      </View>
      <View style={styles.userContainer}>
        {type === 'button' ? (
          (user as UserButtonProps[]).map((each: UserButtonProps) => (
            <UserButton key={each.display} {...each} />
          ))
        ) : type === 'input' ? (
          <UserInput {...(user as UserInputProps)} />
        ) : (
          ''
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    // height: '85%',
    margin: 10,
  },
  common: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  botContainer: {
    maxWidth: '80%',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  botText: {
    fontSize: theme.font.small,
  },
  userContainer: {
    maxWidth: '80%',
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
});

export default Balloon;
