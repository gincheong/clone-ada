import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
// actions
import { BalloonAction } from '../../reducers/BalloonSlice';
// interfaces
import { UserButtonProps } from './interfaces';
import { Button } from '../../reducers/BalloonInterfaces';
// styles
import theme from '../../assets/theme';

const UserButton = (props: UserButtonProps) => {
  const { user } = props;
  const data = user.data as Button[];
  const dispatch = useDispatch();

  const onPressButton = (value: string) => {
    // TODO 입력값 API로 전달해야 한다
    dispatch(BalloonAction.nextConversationStart(value));
  };

  return (
    <View>
      {data.map((each, idx) => (
        <View key={each.value + idx}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onPressButton(each.value)}>
            <Text style={styles.text}>{each.display}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: theme.color.accent2,
    borderRadius: 15,
    maxWidth: '100%',
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: theme.font.normal,
    color: theme.color.accent2,
  },
});

export default UserButton;
