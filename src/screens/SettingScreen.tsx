import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useGlobalize } from 'react-native-globalize';
// interfaces
import { StackProps } from './interfaces';
// globalize
import loadSettingMessages from '../globalize/SettingMessages';
// styles
import theme from '../assets/theme';

loadSettingMessages();

const SettingScreen = ({
  navigation,
}: StackScreenProps<StackProps, 'Setting'>) => {
  const { formatMessage } = useGlobalize();

  return (
    <View style={styles.container}>
      {/* Setting */}
      <TouchableOpacity>
        <View style={styles.listItem}>
          <MaterialIcons
            name="account-circle"
            size={theme.font.xlarge + 10}
            color={theme.color.accent1}
          />
          <View style={styles.listItemTextContainer}>
            <Text style={styles.listItemTitle}>
              {formatMessage('setting/setting')}
            </Text>
            <Text style={styles.listItemDescription}>
              {formatMessage('setting/settingDesc')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* Privacy */}
      <TouchableOpacity>
        <View style={styles.listItem}>
          <MaterialIcons
            name="privacy-tip"
            size={theme.font.xlarge + 10}
            color={theme.color.accent2}
          />
          <View style={styles.listItemTextContainer}>
            <Text style={styles.listItemTitle}>
              {formatMessage('setting/privacy')}
            </Text>
            <Text style={styles.listItemDescription}>
              {formatMessage('setting/privacyDesc')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* Notification */}
      <TouchableOpacity>
        <View style={styles.listItem}>
          <MaterialIcons
            name="notifications"
            size={theme.font.xlarge + 10}
            color={theme.color.accent3}
          />
          <View style={styles.listItemTextContainer}>
            <Text style={styles.listItemTitle}>
              {formatMessage('setting/notification')}
            </Text>
            <Text style={styles.listItemDescription}>
              {formatMessage('setting/notificationDesc')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* Language */}
      <TouchableOpacity onPress={() => navigation.navigate('Language')}>
        <View style={styles.listItem}>
          <MaterialCommunityIcons
            name="alphabet-latin"
            size={theme.font.xlarge + 10}
            color={theme.color.dark}
          />
          <View style={styles.listItemTextContainer}>
            <Text style={styles.listItemTitle}>
              {formatMessage('setting/language')}
            </Text>
            <Text style={styles.listItemDescription}>
              {formatMessage('setting/languageDesc')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  listItemTextContainer: {
    marginLeft: 30,
  },
  listItemTitle: {
    fontSize: theme.font.large,
  },
  listItemDescription: {
    fontSize: theme.font.xsmall,
  },
});

export default SettingScreen;
