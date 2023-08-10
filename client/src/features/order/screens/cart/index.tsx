import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Button, RoundedType } from 'common/components/button';
import { ScreenWrapper } from 'common/components/screen_wrapper';
import { CartItem } from '../../components/cart_item';
import { AppStackParamList, Routes } from 'configs/navigation/routes';

import { styles } from './styles';

export const CartScreen = () => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const navigateToCheckout = () => navigation.navigate(Routes.Checkout);

  return (
    <ScreenWrapper>
      <FlatList data={[1]} renderItem={({ item }) => <CartItem />} />
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
