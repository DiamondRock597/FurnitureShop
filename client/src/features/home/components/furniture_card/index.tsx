import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppStackParamList, Routes } from 'navigation/routes';
import { View, Text, TouchableOpacity } from 'react-native';

import { style } from './style';

interface Props {
  price: string;
  name: string;
  image: string;
}

export const FurnitureCard: React.FC<Props> = React.memo(({ name, price }) => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const navigateToProduct = () => navigation.navigate(Routes.Product, { productId: name });

  return (
    <TouchableOpacity onPress={navigateToProduct} style={style.container}>
      <View style={style.image} />
      <Text style={style.name}>{name}</Text>
      <Text style={style.price}>$ {price}</Text>
    </TouchableOpacity>
  );
});
