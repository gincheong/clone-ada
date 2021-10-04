import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
// interfaces
import { DrawerProps } from './interfaces';
import { StackProps } from '../../screens/interfaces';
// styles
import theme from '../../assets/styles';

const Drawer = (props: DrawerProps) => {
  const { setShowDrawer, navigation } = props;

  const onPressCloseIcon = () => {
    setShowDrawer(prev => !prev);
  };

  const navigateScreen = (name: keyof StackProps) => {
    navigation.navigate(name);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateScreen('Setting')}>
        <View style={styles.item}>
          <Icon style={styles.icon} name="gear" />
          <Text style={styles.itemText}>Setting</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateScreen('Profile')}>
        <View style={styles.item}>
          <Icon style={styles.icon} name="user" />
          <Text style={styles.itemText}>Profile</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressCloseIcon}>
        <View style={{ ...styles.item, ...styles.right }}>
          <Icon style={styles.close} name="close" />
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
  item: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: theme.font.normal,
  },
  icon: {
    fontSize: theme.font.xlarge,
    marginRight: 15,
  },
  right: {
    alignSelf: 'flex-end',
  },
  close: {
    fontSize: theme.font.xlarge,
  },
});

export default Drawer;
