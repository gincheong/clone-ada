import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
// Components
import Bot from './Bot';
import User from './User';
// interfaces
import { RootState } from '../../stores';

const Balloon = () => {
  const { conversation } = useSelector(
    (state: RootState) => state.BalloonReducer,
  );

  return (
    <View>
      {conversation.map((each, idx) => (
        <View key={each.bot + idx}>
          <Bot message={each.bot} />
          <User message={each.user} />
        </View>
      ))}
    </View>
  );
};

export default Balloon;
