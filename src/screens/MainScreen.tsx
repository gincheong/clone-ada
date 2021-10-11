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
// components
import Footer from '../components/Footer/Footer';
import Balloon from '../components/Balloon/Balloon';
import PrevBalloon from '../components/Balloon/PrevBalloon';
import Drawer from '../components/Drawer/Drawer';
// interfaces
import { StackProps } from './interfaces';
// styles
import theme from '../assets/theme';
import AnimationPreset from '../assets/animation';

const DRAWER_WIDTH = Dimensions.get('window').width / 2 + 50;

const MainScreen = (props: StackScreenProps<StackProps, 'Main'>) => {
  const { navigation } = props;

  const [showDrawer, setShowDrawer] = React.useState(false);

  const drawerAnimation = React.useRef(new Animated.Value(0)).current;

  // * Drawer Animation
  React.useEffect(() => {
    if (showDrawer) {
      Animated.timing(drawerAnimation, {
        toValue: -DRAWER_WIDTH,
        easing: AnimationPreset.drawer.easing,
        duration: AnimationPreset.drawer.duration,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(drawerAnimation, {
        toValue: 0,
        easing: AnimationPreset.drawer.easing,
        duration: AnimationPreset.drawer.duration,
        useNativeDriver: false,
      }).start();
    }
  }, [showDrawer, drawerAnimation]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Animated.View style={{ ...styles.main, left: drawerAnimation }}>
            <View style={styles.balloonContainer}>
              <PrevBalloon />
              <Balloon />
            </View>
            <Footer setShowDrawer={setShowDrawer} />
          </Animated.View>
          <Animated.View
            style={{
              ...styles.drawerContainer,
              left: Animated.add(
                drawerAnimation,
                Dimensions.get('window').width,
              ),
            }}>
            <Drawer navigation={navigation} setShowDrawer={setShowDrawer} />
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
