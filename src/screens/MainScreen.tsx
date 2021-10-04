import React from 'react';
import { Animated, Dimensions, Easing, StyleSheet, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// components
import Footerbar from '../components/FooterBar/FooterBar';
import Balloon from '../components/Balloon/Balloon';
import Drawer from '../components/Drawer/Drawer';
// store
import store from '../stores';
// interfaces
import { Data } from '../interfaces/dummyData';
import { StackProps } from './interfaces';
// styles
import theme from '../assets/styles';
import { Provider } from 'react-redux';

const DRAWER_WIDTH = Dimensions.get('window').width / 2 + 50;
const ANIMATION_DURATION = 300;
const ANIMATION_EASING = Easing.out(Easing.exp);

const MainScreen = ({ navigation }: StackScreenProps<StackProps, 'Main'>) => {
  const [showDrawer, setShowDrawer] = React.useState(false);
  const drawerAnimation = React.useRef(new Animated.Value(0)).current;

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

  const dummyData: Data[] = [
    {
      bot: 'Ada provides a general symptom assessment, whatever your symptoms and will also consider Covid-19 where relevant. For up-to-date guidance specific to Covid-19, please use the WHO website.',
      type: 'button',
      user: [
        { display: 'Learn more on the WHO website', payload: 'open who' },
        { display: 'Continue using Ada', payload: 'coninue' },
      ],
    },
    {
      bot: 'What is your name?',
      type: 'input',
      user: {
        placeholder: 'write your name',
      },
    },
  ];

  return (
    <Provider store={store}>
      <View
        style={{
          ...styles.container,
        }}>
        <Animated.View style={{ ...styles.main, left: drawerAnimation }}>
          <View style={styles.balloonContainer}>
            {dummyData.map(each => (
              <Balloon key={each.bot} {...each} />
            ))}
          </View>
          <Footerbar setShowDrawer={setShowDrawer} />
        </Animated.View>
        <Animated.View
          style={{
            ...styles.drawer,
            left: Animated.add(drawerAnimation, Dimensions.get('window').width),
          }}>
          <Drawer setShowDrawer={setShowDrawer} navigation={navigation} />
        </Animated.View>
      </View>
    </Provider>
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
  drawer: {
    height: '100%',
    position: 'absolute',
    width: DRAWER_WIDTH,
    right: -DRAWER_WIDTH,
  },
  balloonContainer: {
    flex: 0.9,
    justifyContent: 'flex-end',
    backgroundColor: theme.color.white,
  },
});

export default MainScreen;
