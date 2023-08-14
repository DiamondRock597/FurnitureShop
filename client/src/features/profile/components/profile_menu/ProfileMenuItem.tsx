import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

interface Props {
  title: string;
  subtitle: string;
  onPress: () => void;
}

export const ProfileMenuItem: React.FC<Props> = ({ title, subtitle, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
    <Image style={styles.image} source={require('@assets/images/arrow.png')} />
  </TouchableOpacity>
);
