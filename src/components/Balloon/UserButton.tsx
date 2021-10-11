import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
// actions
import { BalloonAction } from '../../reducers/BalloonSlice';
// interfaces
import { UserButtonProps } from './interfaces';
// styles
import theme from '../../assets/theme';

const UserButton = (props: UserButtonProps) => {
  const { button } = props;
  const dispatch = useDispatch();

  const onPressButton = (value: string) => {
    dispatch(BalloonAction.nextConversationStart());
  };

  return (
    <View>
      {button.map((each, idx) => (
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
    width: '100%',
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: theme.font.normal,
    color: theme.color.accent2,
  },
});

export default UserButton;
