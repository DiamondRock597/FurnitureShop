import React from 'react';
import { View, Text } from 'react-native';

import { style } from './style';

interface Props {
  price: string;
  name: string;
  image: string;
}

export const FurnitureCard: React.FC<Props> = React.memo(({ name, price }: Props) => (
  <View style={style.container}>
    <View style={style.image} />
    <Text style={style.name}>{name}</Text>
    <Text style={style.price}>$ {price}</Text>
  </View>
));
