import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
// actions
import { LocaleAction } from '../../reducers/LocaleSlice';
// storage
import { setStorageData } from '../../asyncStorage/AsyncStorage';
// interfaces
import { RootState } from '../../stores';
import { LanguageListItemProps } from './interfaces';
// styles
import theme from '../../assets/theme';

const LanguageListItem = (props: LanguageListItemProps) => {
  const { display } = props;
  const { locale } = useSelector((state: RootState) => state.LocaleReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const setLocaleStorage = async () => {
      await setStorageData('locale', locale);
    };
    setLocaleStorage();
  }, [locale]);

  return (
    <TouchableOpacity
      onPress={() => dispatch(LocaleAction.setLocale(props.locale))}>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{display}</Text>
        {locale === props.locale && (
          <FontAwesome5Icon
            name="check"
            size={theme.font.large}
            style={styles.check}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    margin: 10,
  },
  listItemText: {
    color: theme.color.black,
    fontSize: theme.font.large,
  },
  check: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
});

export default LanguageListItem;
