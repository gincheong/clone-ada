import React from 'react';
import { Animated, Dimensions, View } from 'react-native';
import { useSelector } from 'react-redux';
// components
import Bot from './Bot';
import User from './User';
// interfaces
import { RootState } from '../../stores';
// styles
import AnimationPreset from '../../assets/animation';

const WINDOW_WIDTH = Dimensions.get('window').height;

const PrevBalloon = () => {
  const { conversationIdx, conversations } = useSelector(
    (state: RootState) => state.BalloonReducer,
  );
  const moveAnimation = React.useRef(new Animated.Value(0)).current;
  const currentConversation = conversations[conversationIdx - 1];

  React.useEffect(() => {
    moveAnimation.setValue(0);

    Animated.timing(moveAnimation, {
      toValue: WINDOW_WIDTH,
      easing: AnimationPreset.prevBalloon.easing,
      duration: AnimationPreset.prevBalloon.duration,
      useNativeDriver: false,
    }).start();
  }, [moveAnimation, conversationIdx]);

  // 이전 대화가 있는 경우에만 표시함
  return conversationIdx > 0 ? (
    <View>
      <Animated.View style={{ right: moveAnimation }}>
        <Bot message={currentConversation.bot} />
      </Animated.View>
      <Animated.View style={{ left: moveAnimation }}>
        <User message={currentConversation.user} />
      </Animated.View>
    </View>
  ) : null;
};

export default PrevBalloon;
