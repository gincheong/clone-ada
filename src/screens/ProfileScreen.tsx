import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useGlobalize } from 'react-native-globalize';
import FeatherIcon from 'react-native-vector-icons/Feather';
// components
import ListItem from '../components/ListItem/ListItem';
// interfaces
import { StackProps } from './interfaces';
import { Profile } from '../asyncStorage/interfaces';
// globalize
import loadProfileMessages from '../globalize/ProfileMessages';
// storage
import { getStorageData } from '../asyncStorage/AsyncStorage';
// styles
import theme from '../assets/theme';

loadProfileMessages();
const iconSize = theme.font.xlarge;

const ProfileScreen = ({
  navigation,
}: StackScreenProps<StackProps, 'Profile'>) => {
  const [profiles, setProfiles] = React.useState<Profile[]>([]);
  const { formatMessage } = useGlobalize();

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
        title={formatMessage('profile/add')}
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
