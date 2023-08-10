import React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Button, RoundedType } from 'common/components/button';
import { ScreenWrapper } from 'common/components/screen_wrapper';
import { AddressItem } from 'features/profile/components/address_item';
import { AppStackParamList, Routes } from 'configs/navigation/routes';

import { styles } from './styles';

export const CheckoutScreen = () => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const navigateToSuccessfulOrder = () => navigation.navigate(Routes.SuccessfulOrder);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Shipping Address</Text>
          <AddressItem item={{ name: 'Name', zipcode: '123556', country: 'Country', city: 'City', isActive: false, address: 'Address', id: 'ID' }} />
        </View>
        <View>
          <Text style={styles.title}>Payment</Text>
          <View style={styles.paymentContainer}>
            <View style={styles.paymentMethodContainer}>
              <Image source={require('@assets/images/master_card.png')} />
              <Text style={styles.paymentMethod}>mastercard</Text>
            </View>
            <Text style={styles.cardNumber}>**** **** **** 3947</Text>
          </View>
        </View>
      </View>
      <View style={styles.orderContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.title}>Order: </Text>
          <Text style={styles.price}>$ 50.00</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.title}>Delievery: </Text>
          <Text style={styles.price}>$ 2.00</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.title}>Total: </Text>
          <Text style={[styles.price, styles.totalValue]}>$ 52.00</Text>
        </View>
      </View>
      <Button onPress={navigateToSuccessfulOrder} text="SUBMIT ORDER" roundedType={RoundedType.Medium} />
    </ScreenWrapper>
  );
};
