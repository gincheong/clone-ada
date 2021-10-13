import { StackNavigationProp } from '@react-navigation/stack';
// interfaces
import { StackProps } from '../../screens/interfaces';

export interface DrawerProps {
  navigation: StackNavigationProp<StackProps, 'Main'>;
}
