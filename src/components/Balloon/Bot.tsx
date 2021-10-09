import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// styles
import theme from '../../assets/theme';

const Bot = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="smile-circle" size={theme.font.xlarge + 20} />
      <Text style={styles.botText}>
        The quick brown fox jumps over the lazy dog
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    width: '70%',
  },
  botText: {
    marginTop: 10,
    fontSize: theme.font.normal,
  },
});

export default Bot;
