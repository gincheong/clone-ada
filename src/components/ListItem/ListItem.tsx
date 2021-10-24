import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
// interfaces
import { ListItemProps } from './interfaces';
// styles
import theme from '../../assets/theme';

const defaultValue = {
  titleSize: theme.font.large,
  titleColor: theme.color.black,
  descriptionSize: theme.font.xsmall,
  iconSize: theme.font.large,
  centerMargin: 20,
};

const ListItem = (props: ListItemProps) => {
  const {
    title,
    titleSize,
    titleColor,
    description,
    descriptionSize,
    icon,
    centerMargin,
    onPress,
    checked,
  } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {icon && (
          <View
            style={{
              ...styles.iconContainer,
              marginRight: centerMargin ?? defaultValue.centerMargin,
            }}>
            {icon}
          </View>
        )}
        <View style={styles.textContainer}>
          <View>
            <Text
              style={{
                fontSize: titleSize ?? defaultValue.titleSize,
                color: titleColor ?? defaultValue.titleColor,
              }}>
              {title}
            </Text>
            {description && (
              <Text
                style={{
                  fontSize: descriptionSize ?? defaultValue.descriptionSize,
                }}>
                {description}
              </Text>
            )}
          </View>
        </View>
        {checked && (
          <View style={styles.checkContainer}>
            <FontAwesome5Icon name="check" size={defaultValue.iconSize} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    padding: 5,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkContainer: {
    position: 'absolute',
    alignSelf: 'center',
    right: 0,
  },
});

export default ListItem;
