import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppStackParamList, MainStackRoutes } from 'configs/navigation/routes';
import { Image, Text, TouchableOpacity } from 'react-native';

import { style } from './style';

interface Props {
  cost: string;
  name: string;
  image: string;
  id: string;
}

export const FurnitureCard: React.FC<Props> = React.memo(({ name, cost, image, id }) => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const navigateToProduct = () => navigation.navigate(MainStackRoutes.Product, { productId: id });

  return (
    <TouchableOpacity onPress={navigateToProduct} style={style.container}>
      <Image style={style.image} source={{ uri: image }} />
      <Text style={style.name}>{name}</Text>
      <Text style={style.price}>$ {cost}.00</Text>
    </TouchableOpacity>
  );
});
