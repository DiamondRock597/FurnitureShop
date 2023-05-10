import React, { useMemo } from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

interface Props extends TextInputProps {
  title: string;
  error?: boolean;
}

export const Input: React.FC<Props> = ({ title, error, ...props }) => {
  const containerStyles = useMemo(() => [styles.container, error && { borderColor: 'red' }], [error]);
  return (
    <View style={containerStyles}>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.text} {...props} />
    </View>
  );
};
