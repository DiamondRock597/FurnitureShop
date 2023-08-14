import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export const Counter: React.FC<Props> = ({ value, onChange }) => {
  const increment = () => onChange(value + 1);
  const decrement = () => {
    if (value === 0) {
      return;
    }

    onChange(value - 1);
  };

  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity onPress={increment} style={styles.button}>
        <Image style={styles.plusIcon} source={require('@assets/images/plus.png')} />
      </TouchableOpacity>
      <Text style={styles.value}>{value >= 10 ? value : `0${value}`}</Text>
      <TouchableOpacity onPress={decrement} style={styles.button}>
        <Image style={styles.minusIcon} source={require('@assets/images/minus.png')} />
      </TouchableOpacity>
    </View>
  );
};
