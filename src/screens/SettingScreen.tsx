import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { StackScreenProps } from '@react-navigation/stack';
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
        <View style={styles.listItem}>
          <Icon
            name={'account-circle'}
            size={theme.font.xlarge + 10}
            color={theme.color.accent2}
          />
          <View style={styles.textContainer}>
            <Text style={styles.itemText}>Account</Text>
            <Text style={styles.itemDescription}>
              Everythig regarding your login
            </Text>
          </View>
        </View>
        <View style={styles.listItem}>
          <Icon
            name={'privacy-tip'}
            size={theme.font.xlarge + 10}
            color={theme.color.accent}
          />
          <View style={styles.textContainer}>
            <Text style={styles.itemText}>Privacy</Text>
            <Text style={styles.itemDescription}>
              Manage your personal health data
            </Text>
          </View>
        </View>
        <View style={styles.listItem}>
          <Icon
            name={'notifications'}
            size={theme.font.xlarge + 10}
            color={theme.color.accent3}
          />
          <View style={styles.textContainer}>
            <Text style={styles.itemText}>Notification</Text>
            <Text style={styles.itemDescription}>
              Manage communications with Ada
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  list: {
    flex: 1,
  },
  listItem: {
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 20,
  },
  itemText: {
    fontSize: theme.font.large,
  },
  itemDescription: {
    fontSize: theme.font.xsmall,
    color: theme.color.gray,
  },
});

export default SettingScreen;
