import React from 'react';
import { StyleSheet, View } from 'react-native';
// interfaces
import { HorizontalRuleProps } from './interfaces';
// styles
import theme from '../../assets/theme';

const defaultValue = {
  color: theme.color.black,
  width: 1,
};

const HorizontalRule = (props: HorizontalRuleProps) => {
  const { color, width } = props;

  return (
    <View
      style={{
        ...styles.hr,
        borderBottomColor: color ?? defaultValue.color,
        borderBottomWidth: width ?? defaultValue.width,
      }}
    />
  );
};

const styles = StyleSheet.create({
  hr: {
    margin: 5,
  },
});

export default HorizontalRule;
