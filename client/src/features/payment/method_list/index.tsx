import React from 'react';
import { FlatList } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ScreenWrapper } from 'components/screen_wrapper';
import { FloatingButton } from 'components/floating_button';
import { PaymentMethod } from '../components/payment_method';
import { AppStackParamList, Routes } from 'navigation/routes';

export const PaymentMethodScreen = () => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();
  const navigateToCreatePaymentMethod = () => navigation.navigate(Routes.AddPaymentMethod);
  return (
    <ScreenWrapper>
      <FlatList data={[1, 2]} renderItem={({ item }) => <PaymentMethod />} />
      <FloatingButton onPress={navigateToCreatePaymentMethod} />
    </ScreenWrapper>
  );
};
