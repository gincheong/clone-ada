import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
// interfaces
import { StackProps } from '../../screens/interfaces';

export interface DrawerProps {
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: StackNavigationProp<StackProps, 'Main'>;
}
