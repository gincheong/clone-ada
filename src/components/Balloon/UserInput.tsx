import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
// actions
import { BalloonAction } from '../../reducers/BalloonSlice';
// interfaces
import { UserInputProps } from './interfaces';
import { Input } from '../../reducers/interfaces';
// styles
import theme from '../../assets/theme';

const UserInput = (props: UserInputProps) => {
  const { user, answer } = props;
  const data = user.data as Input;
  const dispatch = useDispatch();

  const [value, setValue] = React.useState<string>(answer);

  React.useEffect(() => {
    setValue(answer);
  }, [user]);

  const onSubmit = () => {
    if (value.trim() === '') {
      setValue('');
    } else {
      dispatch(BalloonAction.nextConversationStart(value.trim()));
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={data.placeholder}
        value={value}
        onChangeText={setValue}
        onSubmitEditing={() => onSubmit()}
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
