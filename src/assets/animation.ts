import { Easing } from 'react-native';

const AnimationPreset = {
  balloon: {
    duration: 3000,
    easing: Easing.out(Easing.exp),
  },
  prevBalloon: {
    duration: 2000,
    easing: Easing.out(Easing.exp),
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
