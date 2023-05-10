import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Fonts } from 'constants/fonts';

import { styles } from './style';
import { Loader } from 'components/loader';

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
      {isLoading ? <Loader /> : <Text style={[styles.text, { fontFamily }]}>{text}</Text>}
    </TouchableOpacity>
  );
};
