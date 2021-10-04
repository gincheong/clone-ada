import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// interfaces
import { TextWithIconProps } from './interfaces';

const TextWithIcon = (props: TextWithIconProps) => {
  const { text, icon, description } = props;

  const renderIcon = () => {
    switch (icon?.family) {
      case 'EvilIcons':
        return (
          <EvilIcons
            style={styles.icon}
            name={icon.name as keyof typeof EvilIcons.getRawGlyphMap}
            size={icon.size}
            color={icon.color}
          />
        );

      case 'MaterialIcons':
        return (
          <MaterialIcons
            style={styles.icon}
            name={icon.name as keyof typeof MaterialIcons.getRawGlyphMap}
            size={icon.size}
            color={icon.color}
          />
        );
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {renderIcon()}
      <View style={styles.textContainer}>
        <Text style={{ fontSize: text.size, color: text.color }}>
          {text.value}
        </Text>
        {description && (
          <Text
            style={{ fontSize: description.size, color: description.color }}>
            {description.value}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  icon: {
    marginRight: 20,
  },
  textContainer: {
    flexDirection: 'column',
  },
});

export default TextWithIcon;
