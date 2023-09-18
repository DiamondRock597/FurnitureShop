import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Button, RoundedType } from 'common/components/button';
import { ScreenWrapper } from 'common/components/screen_wrapper';
import { CartItem } from '../../components/cart_item';
import { AppStackParamList, MainStackRoutes } from 'configs/navigation/routes';
import { GET_CART } from '../../graphql/queries';
import { BasketItem } from 'models/basket_item';

import { styles } from './styles';

export const CartScreen = () => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const { data, loading, refetch } = useQuery<{ basket: { items: Array<BasketItem>; total: number } }>(GET_CART, {
    fetchPolicy: 'cache-and-network',
  });

  const navigateToCheckout = () => navigation.navigate(MainStackRoutes.Checkout);

  const ListHeaderComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>List is empty, please add furnitures to basket!</Text>
    </View>
  );

  return (
    <ScreenWrapper>
      <FlatList
        onRefresh={refetch}
        keyExtractor={(item) => `CartItem-${item.id}`}
        refreshing={loading}
        ListHeaderComponent={ListHeaderComponent}
        data={data?.basket.items}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalTitle}>Total:</Text>
          <Text style={styles.totalValue}>${data?.basket.total}.00</Text>
        </View>
        <Button onPress={navigateToCheckout} disabled={!data?.basket.items.length} text="Check out" roundedType={RoundedType.Medium} />
      </View>
    </ScreenWrapper>
  );
};
