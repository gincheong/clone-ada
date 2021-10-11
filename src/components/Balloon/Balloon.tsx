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

const WINDOW_WIDTH = Dimensions.get('window').width * 2;

const Balloon = () => {
  const { conversationIdx, conversations } = useSelector(
    (state: RootState) => state.BalloonReducer,
  );
  const moveAnimation = React.useRef(new Animated.Value(0)).current;
  const fadeInAnimation = React.useRef(new Animated.Value(0)).current;
  const currentConversation = conversations[conversationIdx];

  // * Fade-In Animation
  React.useEffect(() => {
    fadeInAnimation.setValue(0);

    Animated.timing(fadeInAnimation, {
      toValue: 1,
      easing: AnimationPreset.opacity.easing,
      duration: AnimationPreset.opacity.duration,
      useNativeDriver: false,
    }).start();
  }, [fadeInAnimation, conversationIdx]);

  // * Move Animation
  React.useEffect(() => {
    moveAnimation.setValue(-WINDOW_WIDTH);

    Animated.timing(moveAnimation, {
      toValue: 0,
      easing: AnimationPreset.balloon.easing,
      duration: AnimationPreset.balloon.duration,
      useNativeDriver: false,
    }).start();
  }, [moveAnimation, conversationIdx]);

  return (
    <Animated.View
      style={{
        ...styles.container,
        opacity: fadeInAnimation,
        bottom: moveAnimation,
      }}>
      <Bot message={currentConversation.bot} />
      <User message={currentConversation.user} />
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
