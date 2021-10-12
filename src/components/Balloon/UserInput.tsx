import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
// actions
import { BalloonAction } from '../../reducers/BalloonSlice';
// interfaces
import { UserInputProps } from './interfaces';
// styles
import theme from '../../assets/theme';

const UserInput = (props: UserInputProps) => {
  const { input } = props;
  const dispatch = useDispatch();

  const [value, setValue] = React.useState<string>('');

  const onSubmit = (value: string) => {
    // TODO 입력값 API로 전달
    dispatch(BalloonAction.nextConversationStart('textinput'));
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={input.placeholder}
        value={value}
        onChangeText={setValue}
        onSubmitEditing={() => onSubmit(value)}
        blurOnSubmit={true}
        multiline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: theme.font.normal,
    maxWidth: '100%',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: theme.color.light,
  },
});

export default UserInput;
