import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// styles
import theme from '../../assets/theme';

const User = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.userText}>
        정 참판 양반댁 규수 큰 교자 타고 혼례 치른 날
      </Text>
    </View>
  );
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
