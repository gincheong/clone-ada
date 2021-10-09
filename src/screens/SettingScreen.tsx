import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// interfaces
import { StackProps } from './interfaces';
// styles
import theme from '../assets/theme';

const SettingScreen = ({
  navigation,
}: StackScreenProps<StackProps, 'Setting'>) => {
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
            <Text style={styles.listItemTitle}>Setting</Text>
            <Text style={styles.listItemDescription}>
              Everything regarding your login
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
            <Text style={styles.listItemTitle}>Privacy</Text>
            <Text style={styles.listItemDescription}>
              Manage your personal health data
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
            <Text style={styles.listItemTitle}>Notification</Text>
            <Text style={styles.listItemDescription}>
              Manage communications with Ada
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
