import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Button, RoundedType } from 'common/components/button';
import { ScreenWrapper } from 'common/components/screen_wrapper';
import { CartItem } from '../../components/cart_item';
import { AppStackParamList, MainStackRoutes } from 'configs/navigation/routes';
import { GET_CART } from '../../graphql/queries';

import { styles } from './styles';

export const CartScreen = () => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const { data, loading } = useQuery(GET_CART);

  const navigateToCheckout = () => navigation.navigate(MainStackRoutes.Checkout);

  return (
    <ScreenWrapper>
      <FlatList refreshing={loading} data={data?.basket} renderItem={({ item }) => <CartItem item={item} />} />
      <View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalTitle}>Total:</Text>
          <Text style={styles.totalValue}>$50.00</Text>
        </View>
        <Button onPress={navigateToCheckout} text="Check out" roundedType={RoundedType.Medium} />
      </View>
    </ScreenWrapper>
  );
};
