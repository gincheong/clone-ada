import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// actions
import { BalloonAction } from '../../reducers/BalloonSlice';
import { DrawerAction } from '../../reducers/DrawerSlice';
// interfaces
import { RootState } from '../../stores';
// styles
import theme from '../../assets/theme';

const Footer = () => {
  const { onLoading } = useSelector((state: RootState) => state.BalloonReducer);
  const { isOpened } = useSelector((state: RootState) => state.DrawerReducer);
  const dispatch = useDispatch();

  const onPressMenu = () => {
    if (isOpened) {
      dispatch(DrawerAction.closeDrawer());
    } else if (!onLoading) {
      dispatch(DrawerAction.openDrawer());
    }
  };

  const onPressUndo = () => {
    dispatch(BalloonAction.prevConversationStart());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ada</Text>
      {onLoading ? (
        <ActivityIndicator style={styles.indicator} color={theme.color.black} />
      ) : (
        <TouchableOpacity onPress={onPressUndo}>
          <EvilIcons name="undo" size={theme.font.xlarge} />
        </TouchableOpacity>
      )}
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
  indicator: {
    position: 'absolute',
    left: '50%',
    right: '100%',
  },
});

export default Footer;
