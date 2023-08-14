import { Colors } from 'common/constants/colors';
import React, { useMemo } from 'react';
import { View, Text, TextInput, TextInputProps, StyleProp, ViewStyle } from 'react-native';

import { styles } from './styles';

interface Props extends TextInputProps {
  title: string;
  error?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

export const Input: React.FC<Props> = ({ title, error, containerStyle, ...props }) => {
  const containerStyles = useMemo(() => [styles.container, containerStyle, error && { borderColor: 'red' }], [error, containerStyle]);
  return (
    <View style={containerStyles}>
      <Text style={styles.title}>{title}</Text>
      <TextInput placeholderTextColor={Colors.SecondaryGreyLight} style={styles.text} {...props} />
    </View>
  );
};
