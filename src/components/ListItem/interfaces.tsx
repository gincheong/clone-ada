import { GestureResponderEvent } from 'react-native';

export interface ListItemProps {
  title?: string;
  titleSize?: number;
  titleColor?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  icon?: React.ReactNode;
  centerMargin?: number;
  description?: string;
  descriptionSize?: number;
  checked?: boolean;
}
