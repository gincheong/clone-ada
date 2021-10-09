import React from 'react';
import {
  Animated,
  Text,
  StyleSheet,
  View,
  Dimensions,
  Easing,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// components
import Footer from '../components/Footer/Footer';
import Drawer from '../components/Drawer/Drawer';
// interfaces
import { StackProps } from './interfaces';
// styles
import theme from '../assets/theme';

const DRAWER_WIDTH = Dimensions.get('window').width / 2 + 50;
const ANIMATION_DURATION = 300;
const ANIMATION_EASING = Easing.out(Easing.exp);

const MainScreen = (props: StackScreenProps<StackProps, 'Main'>) => {
  const { navigation } = props;

  const [showDrawer, setShowDrawer] = React.useState(false);

  const drawerAnimation = React.useRef(new Animated.Value(0)).current;

  // * Drawer Animation
  React.useEffect(() => {
    if (showDrawer) {
      Animated.timing(drawerAnimation, {
        toValue: -DRAWER_WIDTH,
        easing: ANIMATION_EASING,
        duration: ANIMATION_DURATION,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(drawerAnimation, {
        toValue: 0,
        easing: ANIMATION_EASING,
        duration: ANIMATION_DURATION,
        useNativeDriver: false,
      }).start();
    }
  }, [showDrawer, drawerAnimation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.main, left: drawerAnimation }}>
        <View style={styles.balloonContainer}>
          <Text>asdasd</Text>
        </View>
        <Footer setShowDrawer={setShowDrawer} />
      </Animated.View>
      <Animated.View
        style={{
          ...styles.drawerContainer,
          left: Animated.add(drawerAnimation, Dimensions.get('window').width),
        }}>
        <Drawer navigation={navigation} setShowDrawer={setShowDrawer} />
      </Animated.View>
    </View>
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
