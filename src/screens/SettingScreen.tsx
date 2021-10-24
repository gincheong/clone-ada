import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useGlobalize } from 'react-native-globalize';
// components
import ListItem from '../components/ListItem/ListItem';
// interfaces
import { StackProps } from './interfaces';
// globalize
import loadSettingMessages from '../globalize/SettingMessages';
// styles
import theme from '../assets/theme';

loadSettingMessages();

const iconSize = theme.font.xlarge + 10;

const SettingScreen = ({
  navigation,
}: StackScreenProps<StackProps, 'Setting'>) => {
  const { formatMessage } = useGlobalize();

  return (
    <View style={styles.container}>
      {/* Setting */}
      <ListItem
        icon={
          <MaterialIcons
            name="account-circle"
            size={iconSize}
            color={theme.color.accent1}
          />
        }
        title={formatMessage('setting/setting')}
        description={formatMessage('setting/settingDesc')}
      />
      {/* Privacy */}
      <ListItem
        icon={
          <MaterialIcons
            name="privacy-tip"
            size={iconSize}
            color={theme.color.accent2}
          />
        }
        title={formatMessage('setting/privacy')}
        description={formatMessage('setting/privacyDesc')}
      />
      {/* Notification */}
      <ListItem
        icon={
          <MaterialIcons
            name="notifications"
            size={iconSize}
            color={theme.color.accent3}
          />
        }
        title={formatMessage('setting/notification')}
        description={formatMessage('setting/notificationDesc')}
      />
      {/* Language */}
      <ListItem
        icon={
          <MaterialCommunityIcons
            name="alphabet-latin"
            size={iconSize}
            color={theme.color.dark}
          />
        }
        title={formatMessage('setting/language')}
        description={formatMessage('setting/languageDesc')}
        onPress={() => navigation.navigate('Language')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
});

export default SettingScreen;
