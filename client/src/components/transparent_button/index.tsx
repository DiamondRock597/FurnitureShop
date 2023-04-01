import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './style';

interface Props extends TouchableOpacityProps {
  text: string;
}

export const TransparentButton: React.FC<Props> = ({ text, style, ...props }: Props) => (
  <TouchableOpacity style={[styles.container, style]} {...props}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);
