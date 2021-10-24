import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';
// components
import ListItem from '../components/ListItem/ListItem';
// interfaces
import { StackProps } from './interfaces';
import { Profile } from '../asyncStorage/interfaces';
// storage
import { getStorageData } from '../asyncStorage/AsyncStorage';
// styles
import theme from '../assets/theme';

const iconSize = theme.font.xlarge;

const ProfileScreen = ({
  navigation,
}: StackScreenProps<StackProps, 'Profile'>) => {
  const [profiles, setProfiles] = React.useState<Profile[]>([]);

  // * Load AsyncStorage
  React.useEffect(() => {
    const getProfiles = async () => {
      const storageProfiles = (await getStorageData('profile')) as Profile[];
      setProfiles(storageProfiles);
    };
    getProfiles();
  }, []);

  return (
    <View style={styles.container}>
      <ListItem
        icon={<FeatherIcon name="plus" size={iconSize} />}
        title={'Add New Profile'}
      />
      {profiles.map(each => (
        <ListItem
          icon={<FeatherIcon name="user" size={iconSize} />}
          title={each.name}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    paddingBottom: 40,
  },
});

export default ProfileScreen;
