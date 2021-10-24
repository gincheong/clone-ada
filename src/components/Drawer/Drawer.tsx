import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useGlobalize } from 'react-native-globalize';
// actions
import { DrawerAction } from '../../reducers/DrawerSlice';
import { BalloonAction } from '../../reducers/BalloonSlice';
// interfaces
import { DrawerProps } from './interfaces';
import { StackProps } from '../../screens/interfaces';
// globalize
import loadDrawerMessages from '../../globalize/DrawerMessages';
// styles
import theme from '../../assets/theme';
import ListItem from '../ListItem/ListItem';

loadDrawerMessages();

const iconSize = theme.font.xlarge;

const Drawer = (props: DrawerProps) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { formatMessage } = useGlobalize();

  const onPressClose = () => {
    dispatch(DrawerAction.closeDrawer());
  };

  const restartConversation = () => {
    Alert.alert(
      formatMessage('drawer/alertTitle'),
      formatMessage('drawer/alertContent'),
      [
        { text: formatMessage('cancel'), style: 'cancel' },
        {
          text: formatMessage('ok'),
          onPress: () => {
            dispatch(BalloonAction.restartConversation());
            onPressClose();
          },
          style: 'destructive',
        },
      ],
    );
  };

  const navigateTo = (name: keyof StackProps) => {
    navigation.navigate(name);
  };

  return (
    <View style={styles.container}>
      {/* Setting */}
      <ListItem
        icon={<EvilIcons name="gear" size={iconSize} />}
        title={formatMessage('drawer/setting')}
        onPress={() => navigateTo('Setting')}
      />
      {/* Profile */}
      <ListItem
        icon={<EvilIcons name="user" size={iconSize} />}
        title={formatMessage('drawer/profile')}
        onPress={() => navigateTo('Profile')}
      />
      {/* Refresh */}
      <ListItem
        icon={
          <EvilIcons
            name="refresh"
            size={iconSize}
            color={theme.color.accent1}
          />
        }
        title={formatMessage('drawer/restart')}
        titleColor={theme.color.accent1}
        onPress={restartConversation}
      />
      {/* Close */}
      <View style={styles.closeButton}>
        <ListItem
          icon={<EvilIcons name="close" size={iconSize} />}
          centerMargin={0}
          onPress={onPressClose}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
    backgroundColor: theme.color.light,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
});

export default Drawer;
