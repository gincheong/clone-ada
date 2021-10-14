import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// actions
import { DrawerAction } from '../../reducers/DrawerSlice';
import { BalloonAction } from '../../reducers/BalloonSlice';
// interfaces
import { DrawerProps } from './interfaces';
import { StackProps } from '../../screens/interfaces';
// styles
import theme from '../../assets/theme';

const Drawer = (props: DrawerProps) => {
  const dispatch = useDispatch();
  const { navigation } = props;

  const onPressClose = () => {
    dispatch(DrawerAction.closeDrawer());
  };

  const restartConversation = () => {
    Alert.alert('Warning', 'Restart Conversation', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Ok',
        onPress: () => {
          dispatch(BalloonAction.restartConversation());
          onPressClose();
        },
        style: 'destructive',
      },
    ]);
  };

  const navigateTo = (name: keyof StackProps) => {
    navigation.navigate(name);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateTo('Setting')}>
        <View style={styles.listItem}>
          <EvilIcons name="gear" size={theme.font.xlarge} />
          <Text style={styles.listItemText}>Setting</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('Profile')}>
        <View style={styles.listItem}>
          <EvilIcons name="user" size={theme.font.xlarge} />
          <Text style={styles.listItemText}>Profile</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={restartConversation}>
        <View style={styles.listItem}>
          <EvilIcons
            name="refresh"
            size={theme.font.xlarge}
            color={theme.color.accent1}
          />
          <Text style={{ ...styles.listItemText, color: theme.color.accent1 }}>
            Restart
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressClose}>
        <View style={[styles.listItem, styles.closeButton]}>
          <EvilIcons name="close" size={theme.font.xlarge} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: theme.color.light,
  },
  listItem: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: theme.font.normal,
    marginLeft: 10,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
});

export default Drawer;
