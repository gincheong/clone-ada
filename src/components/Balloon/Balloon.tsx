import React from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
// Components
import Bot from './Bot';
import User from './User';
// interfaces
import { RootState } from '../../stores';
// animation
import AnimationPreset from '../../assets/animation';

const WINDOW_HEIGHT = Dimensions.get('window').width;

const Balloon = () => {
  const { conversationIdx, conversations, onMovingPrev, onMovingNext } =
    useSelector((state: RootState) => state.BalloonReducer);
  const balloonAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const fadeInAnimatedValue = React.useRef(new Animated.Value(1)).current;
  const currentConversation = conversations[conversationIdx];

  // * Moving Next
  React.useEffect(() => {
    if (onMovingNext) {
      fadeInAnimatedValue.setValue(0);

      Animated.timing(fadeInAnimatedValue, {
        toValue: 1,
        easing: AnimationPreset.opacity.easing,
        duration: AnimationPreset.opacity.duration,
        useNativeDriver: false,
      }).start();

      balloonAnimatedValue.setValue(-WINDOW_HEIGHT);

      Animated.timing(balloonAnimatedValue, {
        toValue: 0,
        easing: AnimationPreset.balloon.easing,
        duration: AnimationPreset.balloon.duration,
        useNativeDriver: false,
      }).start();
    }
  }, [fadeInAnimatedValue, balloonAnimatedValue, onMovingNext]);

  // * Moving Prev
  React.useEffect(() => {
    if (onMovingPrev) {
      fadeInAnimatedValue.setValue(1);

      Animated.timing(fadeInAnimatedValue, {
        toValue: 0,
        easing: AnimationPreset.opacity.easing,
        duration: AnimationPreset.opacity.duration,
        useNativeDriver: false,
      }).start();

      balloonAnimatedValue.setValue(0);

      Animated.timing(balloonAnimatedValue, {
        toValue: -WINDOW_HEIGHT,
        easing: AnimationPreset.balloon.easing,
        duration: AnimationPreset.balloon.duration,
        useNativeDriver: false,
      }).start();
    } else {
      balloonAnimatedValue.setValue(0);
      fadeInAnimatedValue.setValue(1);
    }
  }, [fadeInAnimatedValue, balloonAnimatedValue, onMovingPrev]);

  return (
    <Animated.View
      style={{
        ...styles.container,
        opacity: fadeInAnimatedValue,
        bottom: balloonAnimatedValue,
      }}>
      <Bot {...currentConversation} />
      <User {...currentConversation} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
  },
});

export default Balloon;
