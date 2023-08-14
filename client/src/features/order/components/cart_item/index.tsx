import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { Counter } from 'common/components/counter';
import { BasketItem } from 'models/basket_item';

import { styles } from './styles';

interface Props {
  item: BasketItem;
}

export const CartItem: React.FC<Props> = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <View style={styles.container}>
      <Image source={require('@assets/images/small_example.png')} resizeMode="contain" style={styles.image} />
      <View style={styles.controllerContainer}>
        <Text style={styles.title}>{item.productName}</Text>
        <Text style={styles.price}>$ {item.productCost}.00</Text>
        <Counter value={quantity} onChange={setQuantity} />
      </View>
      <View style={styles.circleContainer}>
        <TouchableOpacity style={styles.circle}>
          <Image style={styles.plusIcon} source={require('@assets/images/plus.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
