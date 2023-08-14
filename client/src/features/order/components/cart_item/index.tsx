import { Counter } from 'common/components/counter';
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export const CartItem = () => (
  <View style={styles.container}>
    <Image source={require('@assets/images/small_example.png')} resizeMode="contain" style={styles.image} />
    <View style={styles.controllerContainer}>
      <Text style={styles.title}>Minimal Stand</Text>
      <Text style={styles.price}>$25.00</Text>
      <Counter />
    </View>
    <View style={styles.circleContainer}>
      <TouchableOpacity style={styles.circle}>
        <Image style={styles.plusIcon} source={require('@assets/images/plus.png')} />
      </TouchableOpacity>
    </View>
  </View>
);
