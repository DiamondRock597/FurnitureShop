import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useMutation } from '@apollo/client';

import { Counter } from 'common/components/counter';
import { BasketItem } from 'models/basket_item';
import { DELETE_CART_ITEM, INCREMENT_BASKET_ITEM } from 'features/order/graphql/mutations';
import { GET_CART } from 'features/order/graphql/queries';

import { styles } from './styles';

interface Props {
  item: BasketItem;
}

export const CartItem: React.FC<Props> = ({ item }) => {
  const [deleteCartItem] = useMutation(DELETE_CART_ITEM, { refetchQueries: [GET_CART] });
  const [updateCartItem] = useMutation(INCREMENT_BASKET_ITEM, { refetchQueries: [GET_CART] });

  const onDeleteBasketItem = () => deleteCartItem({ variables: { id: item.id } });
  const onUpdateQuantity = (value: number) => updateCartItem({ variables: { quantity: value } });

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.productImage }} resizeMode="contain" style={styles.image} />
      <View style={styles.controllerContainer}>
        <Text style={styles.title}>{item.productName}</Text>
        <Text style={styles.price}>$ {item.productCost}.00</Text>
        <Counter value={item.quantity} onChange={onUpdateQuantity} />
      </View>
      <View style={styles.circleContainer}>
        <TouchableOpacity onPress={onDeleteBasketItem} style={styles.circle}>
          <Image style={styles.plusIcon} source={require('@assets/images/plus.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
