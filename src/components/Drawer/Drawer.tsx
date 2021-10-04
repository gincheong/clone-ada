import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
// components
import TextWithIcon from '../TextWithIcon/TextWithIcon';
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

  // * SettingScreen의 리스트와 묶기
  return (
    <View style={styles.container}>
      {/* Setting */}
      <TouchableOpacity onPress={() => navigateScreen('Setting')}>
        <TextWithIcon
          icon={{
            family: 'EvilIcons',
            name: 'gear',
            size: theme.font.xlarge,
          }}
          text={{
            value: 'Setting',
            size: theme.font.large,
          }}
        />
      </TouchableOpacity>
      {/* Profile */}
      <TouchableOpacity onPress={() => navigateScreen('Profile')}>
        <TextWithIcon
          icon={{
            family: 'EvilIcons',
            name: 'user',
            size: theme.font.xlarge,
          }}
          text={{
            value: 'Profile',
            size: theme.font.large,
          }}
        />
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
