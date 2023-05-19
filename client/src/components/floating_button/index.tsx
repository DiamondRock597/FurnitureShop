import React from 'react';
import { Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

export const FloatingButton: React.FC<TouchableOpacityProps> = (props) => (
  <TouchableOpacity {...props} style={styles.container}>
    <Image source={require('@assets/images/plus.png')} />
  </TouchableOpacity>
);
