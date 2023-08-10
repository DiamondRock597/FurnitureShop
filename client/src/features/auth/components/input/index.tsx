import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';

import { styles } from './style';

interface Props extends TextInputProps {
  name: string;
  error?: string;
}

export const AuthInput: React.FC<Props> = ({ name, style, error, ...props }: Props) => (
  <View>
    <Text style={styles.name}>{name}</Text>
    <View style={styles.inputContainer}>
      <TextInput style={[styles.input, style]} {...props} />
    </View>
    <Text style={styles.error}>{error}</Text>
  </View>
);
