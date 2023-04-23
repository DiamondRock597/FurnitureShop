import React from 'react';
import { View, Image } from 'react-native';

import { style } from './style';

export const Header: React.FC = () => (
  <View style={style.container}>
    <View style={style.line} />
    <View style={style.imageContainer}>
      <Image source={require('@assets/images/char.png')} style={style.image} />
    </View>
    <View style={style.line} />
  </View>
);
