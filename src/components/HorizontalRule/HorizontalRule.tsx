import { hasProxies } from 'immer/dist/internal';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// interfaces
import { HorizontalRuleProps } from './interfaces';

const HorizontalRule = (props: HorizontalRuleProps) => {
  const { color, width } = props;

  return (
    <View
      style={{
        ...styles.hr,
        borderBottomColor: color,
        borderBottomWidth: width,
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
