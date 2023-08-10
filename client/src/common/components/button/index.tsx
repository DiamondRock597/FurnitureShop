import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Fonts } from 'common/constants/fonts';
import { Colors } from 'common/constants/colors';

import { styles } from './style';

export enum RoundedType {
  Little = 'Little',
  Medium = 'Medium',
}

export const borderRadiusMap = {
  [RoundedType.Little]: 4,
  [RoundedType.Medium]: 8,
};

interface Props extends TouchableOpacityProps {
  roundedType?: RoundedType;
  text: string;
  fontFamily?: Fonts;
  isLoading?: boolean;
}

export const Button: React.FC<Props> = ({ roundedType, text, fontFamily, style, isLoading, ...props }: Props) => {
  const borderRadius = roundedType ? borderRadiusMap[roundedType] : borderRadiusMap[RoundedType.Little];
  return (
    <TouchableOpacity style={[styles.container, { borderRadius }, style]} {...props}>
      {isLoading ? <ActivityIndicator size="small" color={Colors.Primary} /> : <Text style={[styles.text, { fontFamily }]}>{text}</Text>}
    </TouchableOpacity>
  );
};
