import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// interfaces
import { DrawerProps } from './interfaces';
import { StackProps } from '../../screens/interfaces';
// styles
import theme from '../../assets/theme';

const Drawer = (props: DrawerProps) => {
  const { navigation, setShowDrawer } = props;

  const onPressClose = () => {
    setShowDrawer(prevState => !prevState);
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
