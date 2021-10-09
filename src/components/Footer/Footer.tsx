import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// interfaces
import { FooterProps } from './interfaces';
// styles
import theme from '../../assets/theme';

const Footer = (props: FooterProps) => {
  const { setShowDrawer } = props;

  const onPressMenu = () => {
    setShowDrawer(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ada</Text>
      <TouchableOpacity onPress={onPressMenu}>
        <Text style={styles.text}>
          <EvilIcons name="navicon" size={theme.font.xlarge} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.color.white,
  },
  text: {
    fontSize: theme.font.normal,
    marginHorizontal: 20,
  },
});

export default Footer;
