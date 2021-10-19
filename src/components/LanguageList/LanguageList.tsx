import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
// components
import LanguageListItem from './LanguageListItem';
import HorizontalRule from '../HorizontalRule/HorizontalRule';
// interfaces
import { languages } from '../../reducers/LocaleInterfaces';
import { RootState } from '../../stores';
// styles
import theme from '../../assets/theme';

const LanguageList = () => {
  return (
    <>
      {Object.entries(languages).map((each, idx) => {
        const [key, val] = each;

        return (
          <View key={idx}>
            <LanguageListItem
              locale={key as keyof typeof languages}
              display={val}
            />
            {idx < Object.keys(languages).length - 1 && (
              <HorizontalRule color={theme.color.black} width={1} />
            )}
          </View>
        );
      })}
    </>
  );
};

export default LanguageList;
