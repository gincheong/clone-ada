import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
// import { StackScreenProps } from '@react-navigation/stack';
// components
import TextWithIcon from '../components/TextWithIcon/TextWithIcon';
// interfaces
// import { StackProps } from './interfaces';
// styles
import theme from '../assets/styles';

const SettingScreen = () => {
  //   navigation,
  // }: StackScreenProps<StackProps, 'Profile'>) => {

  // * 각 item에 navigate 추가
  // * 일단 그냥 작성했는데, 컴포넌트로 분리하기

  return (
    <View style={styles.container}>
      <ScrollView style={styles.list}>
        {/* Setting */}
        <TextWithIcon
          icon={{
            family: 'MaterialIcons',
            name: 'account-circle',
            size: theme.font.xlarge + 10,
            color: theme.color.accent,
          }}
          text={{
            value: 'Setting',
            size: theme.font.large,
          }}
          description={{
            value: 'Everything regarding your login',
            size: theme.font.xsmall,
            color: theme.color.gray,
          }}
        />
        {/* Privacy */}
        <TextWithIcon
          icon={{
            family: 'MaterialIcons',
            name: 'privacy-tip',
            size: theme.font.xlarge + 10,
            color: theme.color.accent2,
          }}
          text={{
            value: 'Privacy',
            size: theme.font.large,
          }}
          description={{
            value: 'Manage your personal health data',
            size: theme.font.xsmall,
            color: theme.color.gray,
          }}
        />
        {/* Notification */}
        <TextWithIcon
          icon={{
            family: 'MaterialIcons',
            name: 'notifications',
            size: theme.font.xlarge + 10,
            color: theme.color.accent3,
          }}
          text={{
            value: 'Notification',
            size: theme.font.large,
          }}
          description={{
            value: 'Manage communications with Ada',
            size: theme.font.xsmall,
            color: theme.color.gray,
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  list: {
    flex: 1,
  },
  listItem: {
    marginTop: 15,
  },
});

export default SettingScreen;
