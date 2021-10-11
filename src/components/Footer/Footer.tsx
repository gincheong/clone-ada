import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// actions
import { BalloonAction } from '../../reducers/BalloonSlice';
// interfaces
import { FooterProps } from './interfaces';
// styles
import theme from '../../assets/theme';

const Footer = (props: FooterProps) => {
  const { setShowDrawer } = props;
  const dispatch = useDispatch();

  const onPressMenu = () => {
    setShowDrawer(prevState => !prevState);
  };

  const onPressUndo = () => {
    dispatch(BalloonAction.prevConversationStart());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ada</Text>
      <TouchableOpacity onPress={onPressUndo}>
        <EvilIcons name="undo" size={theme.font.xlarge} />
      </TouchableOpacity>
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
