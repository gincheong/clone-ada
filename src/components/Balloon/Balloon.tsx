import React from 'react';
// import { useSelector } from 'react-redux';
import { View, StyleSheet, Text, LayoutChangeEvent } from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
// stores
// import { RootState } from '../../stores';
// components
import UserButton from './UserButton';
import UserInput from './UserInput';
// interfaces
import { BalloonProps, UserButtonProps, UserInputProps } from './interfaces';
// styles
import theme from '../../assets/styles';

const Balloon = (props: BalloonProps) => {
  // const { currentChat } = useSelector(
  //   (state: RootState) => state.balloonReducer,
  // );
  // const { type, user, bot } = currentChat;

  const { type, user, bot, viewHeight } = props;
  const [balloonHeight, setBalloonHeight] = React.useState(0);

  const getLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setBalloonHeight(height);
  };

  return (
    <View
      style={{
        ...styles.container,
        marginTop: viewHeight - balloonHeight,
      }}
      onLayout={getLayout}>
      <View style={{ ...styles.common, ...styles.botContainer }}>
        <FontistoIcon
          style={styles.botIcon}
          name="react"
          size={theme.font.xlarge + 30}
          color={theme.color.accent2}
        />
        <Text style={styles.botText}>{bot}</Text>
      </View>
      <View style={styles.userContainer}>
        {type === 'button'
          ? (user as UserButtonProps[]).map((each: UserButtonProps) => (
              <UserButton key={each.display} {...each} />
            ))
          : type === 'input' && <UserInput {...(user as UserInputProps)} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    margin: 10,
  },
  common: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  botContainer: {
    maxWidth: '80%',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  botIcon: {
    marginBottom: 15,
  },
  botText: {
    fontSize: theme.font.small,
  },
  userContainer: {
    maxWidth: '80%',
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
});

export default Balloon;
