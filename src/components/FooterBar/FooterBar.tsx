import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
// interfaces
import { FooterBarProps } from './interfaces';
// styles
import theme from '../../assets/styles';

const Footerbar = (props: FooterBarProps) => {
  const { setShowDrawer } = props;

  const onPressMenuIcon = () => {
    setShowDrawer(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ada</Text>
      <TouchableOpacity onPress={onPressMenuIcon}>
        <Text style={styles.text}>
          <Icon name="navicon" size={30} />
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

export default Footerbar;
