import { Easing } from 'react-native';

const AnimationPreset = {
  balloon: {
    duration: 1500,
    easing: Easing.out(Easing.ease),
  },
  prevBalloon: {
    duration: 1100,
    easing: Easing.out(Easing.ease),
  },
  opacity: {
    duration: 1000,
    easing: Easing.linear,
  },
  drawer: {
    duration: 300,
    easing: Easing.out(Easing.exp),
  },
};

export default AnimationPreset;
