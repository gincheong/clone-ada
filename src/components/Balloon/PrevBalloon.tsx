import React from 'react';
import { Animated, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
// components
import Bot from './Bot';
import User from './User';
// interfaces
import { RootState } from '../../stores';
// styles
import AnimationPreset from '../../assets/animation';

const WINDOW_HEIGHT = Dimensions.get('window').height;

const PrevBalloon = () => {
  const { conversationIdx, conversations, onMovingPrev, onMovingNext } =
    useSelector((state: RootState) => state.BalloonReducer);
  const moveAnimation = React.useRef(new Animated.Value(0)).current;
  const currentConversation = conversations[conversationIdx - 1];

  // * Moving Prev
  React.useEffect(() => {
    if (onMovingPrev) {
      moveAnimation.setValue(WINDOW_HEIGHT);

      Animated.timing(moveAnimation, {
        toValue: 0,
        easing: AnimationPreset.prevBalloon.easing,
        duration: AnimationPreset.prevBalloon.duration,
        useNativeDriver: false,
      }).start();
    } else {
      moveAnimation.setValue(WINDOW_HEIGHT);
    }
  }, [moveAnimation, onMovingPrev]);

  // * Moving Next
  React.useEffect(() => {
    if (onMovingNext) {
      moveAnimation.setValue(0);

      Animated.timing(moveAnimation, {
        toValue: WINDOW_HEIGHT,
        easing: AnimationPreset.prevBalloon.easing,
        duration: AnimationPreset.prevBalloon.duration,
        useNativeDriver: false,
      }).start();
    }
  }, [moveAnimation, onMovingNext]);

  // 이전 대화가 있는 경우에만 표시함
  return conversationIdx > 0 ? (
    <Animated.View style={{ bottom: moveAnimation }}>
      <Bot message={currentConversation.bot} />
      <User message={currentConversation.user} />
    </Animated.View>
  ) : null;
};

export default PrevBalloon;
