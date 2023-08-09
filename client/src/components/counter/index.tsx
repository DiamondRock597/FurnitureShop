import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export const Counter = () => (
  <View style={styles.counterContainer}>
    <TouchableOpacity style={styles.button}>
      <Image style={styles.plusIcon} source={require('@assets/images/plus.png')} />
    </TouchableOpacity>
    <Text style={styles.value}>02</Text>
    <TouchableOpacity style={styles.button}>
      <Image style={styles.minusIcon} source={require('@assets/images/minus.png')} />
    </TouchableOpacity>
  </View>
);
