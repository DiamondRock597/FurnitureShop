import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';

import { styles } from './style';

interface Props extends TextInputProps {
  name: string;
  error?: string;
}

export const Input: React.FC<Props> = ({ name, style, error, ...props }: Props) => (
  <View style={styles.container}>
    <View style={[!error && styles.inputContainer]}>
      <Text style={styles.name}>{name}</Text>
      <TextInput style={[styles.input, style]} {...props} />
    </View>
    <Text style={styles.error}>{error}</Text>
  </View>
);
