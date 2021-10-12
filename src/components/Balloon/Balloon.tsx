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
  const moveAnimation = React.useRef(new Animated.Value(0)).current;
  const fadeInAnimation = React.useRef(new Animated.Value(1)).current;
  const currentConversation = conversations[conversationIdx];

  // * Moving Next
  React.useEffect(() => {
    if (onMovingNext) {
      fadeInAnimation.setValue(0);

      Animated.timing(fadeInAnimation, {
        toValue: 1,
        easing: AnimationPreset.opacity.easing,
        duration: AnimationPreset.opacity.duration,
        useNativeDriver: false,
      }).start();

      moveAnimation.setValue(-WINDOW_HEIGHT);

      Animated.timing(moveAnimation, {
        toValue: 0,
        easing: AnimationPreset.balloon.easing,
        duration: AnimationPreset.balloon.duration,
        useNativeDriver: false,
      }).start();
    }
  }, [fadeInAnimation, moveAnimation, onMovingNext]);

  // * Moving Prev
  React.useEffect(() => {
    if (onMovingPrev) {
      fadeInAnimation.setValue(1);

      Animated.timing(fadeInAnimation, {
        toValue: 0,
        easing: AnimationPreset.opacity.easing,
        duration: AnimationPreset.opacity.duration,
        useNativeDriver: false,
      }).start();

      moveAnimation.setValue(0);

      Animated.timing(moveAnimation, {
        toValue: -WINDOW_HEIGHT,
        easing: AnimationPreset.balloon.easing,
        duration: AnimationPreset.balloon.duration,
        useNativeDriver: false,
      }).start();
    } else {
      moveAnimation.setValue(0);
      fadeInAnimation.setValue(1);
    }
  }, [fadeInAnimation, moveAnimation, onMovingPrev]);

  return (
    <Animated.View
      style={{
        ...styles.container,
        opacity: fadeInAnimation,
        bottom: moveAnimation,
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
