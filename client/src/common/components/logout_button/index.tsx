import { TouchableOpacity, Image, TouchableOpacityProps } from 'react-native';
import React from 'react';

import { styles } from './styles';

export const LogoutButton: React.FC<TouchableOpacityProps> = (props) => (
  <TouchableOpacity {...props}>
    <Image style={styles.icon} source={require('@assets/images/logout.png')} />
  </TouchableOpacity>
);
