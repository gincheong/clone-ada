import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';
// actions
import { LocaleAction } from '../../reducers/LocaleSlice';
// components
import ListItem from '../../components/ListItem/ListItem';
import HorizontalRule from '../../components/HorizontalRule/HorizontalRule';
// interfaces
import { StackProps } from '../interfaces';
import { RootState } from '../../stores';
import { languages, Locales } from '../../reducers/LocaleInterfaces';
// storage
import { setStorageData } from '../../asyncStorage/AsyncStorage';
// styles
import theme from '../../assets/theme';

const LanguageScreen = ({
  navigation,
}: StackScreenProps<StackProps, 'Language'>) => {
  const { locale } = useSelector((state: RootState) => state.LocaleReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const setLocaleStorage = async () => {
      await setStorageData('locale', locale);
    };
    setLocaleStorage();
  }, [locale]);

  return (
    <View style={styles.container}>
      {Object.entries(languages).map((each, idx) => {
        const [eachLocale, display] = each;

        return (
          <View key={idx}>
            <ListItem
              title={display}
              titleSize={theme.font.xlarge}
              onPress={() =>
                dispatch(LocaleAction.setLocale(eachLocale as Locales))
              }
              checked={locale === eachLocale}
            />
            <HorizontalRule />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    paddingBottom: 80,
  },
});

export default LanguageScreen;
