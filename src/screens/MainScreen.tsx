import React from 'react';
import {
  Animated,
  StyleSheet,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
// components
import Footer from '../components/Footer/Footer';
import Balloon from '../components/Balloon/Balloon';
import PrevBalloon from '../components/Balloon/PrevBalloon';
import Drawer from '../components/Drawer/Drawer';
// actions
import { DrawerAction } from '../reducers/DrawerSlice';
// interfaces
import { StackProps } from './interfaces';
import { RootState } from '../stores';
// styles
import theme from '../assets/theme';
import AnimationPreset from '../assets/animation';

const DRAWER_WIDTH = Dimensions.get('window').width / 2 + 50;

const MainScreen = (props: StackScreenProps<StackProps, 'Main'>) => {
  const { isDrawerOpened } = useSelector(
    (state: RootState) => state.DrawerReducer,
  );
  const dispatch = useDispatch();
  const { navigation } = props;

  const drawerAnimatedValue = React.useRef(new Animated.Value(0)).current;

  const closeDrawer = () => {
    if (isDrawerOpened) {
      dispatch(DrawerAction.closeDrawer());
    }
  };

  // * Drawer Animation
  React.useEffect(() => {
    if (isDrawerOpened) {
      Animated.timing(drawerAnimatedValue, {
        toValue: -DRAWER_WIDTH,
        easing: AnimationPreset.drawer.easing,
        duration: AnimationPreset.drawer.duration,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(drawerAnimatedValue, {
        toValue: 0,
        easing: AnimationPreset.drawer.easing,
        duration: AnimationPreset.drawer.duration,
        useNativeDriver: false,
      }).start();
    }
  }, [isDrawerOpened, drawerAnimatedValue]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Animated.View style={{ ...styles.main, left: drawerAnimatedValue }}>
            {isDrawerOpened ? (
              <TouchableWithoutFeedback onPress={closeDrawer}>
                <View style={styles.hidden}></View>
              </TouchableWithoutFeedback>
            ) : null}
            <View style={styles.balloonContainer}>
              <PrevBalloon />
              <Balloon />
            </View>
            <Footer />
          </Animated.View>
          <Animated.View
            style={{
              ...styles.drawerContainer,
              left: Animated.add(
                drawerAnimatedValue,
                Dimensions.get('window').width,
              ),
            }}>
            <Drawer navigation={navigation} />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  hidden: {
    position: 'absolute',
    width: '100%',
    height: '90%',
    left: 0,
    top: 0,
    zIndex: 9999,
  },
  main: {
    flex: 1,
  },
  balloonContainer: {
    flex: 0.9,
    backgroundColor: theme.color.white,
    justifyContent: 'flex-end',
  },
  drawerContainer: {
    height: '100%',
    position: 'absolute',
    width: DRAWER_WIDTH,
    right: -DRAWER_WIDTH,
  },
});

export default MainScreen;
