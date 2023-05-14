import React from 'react';
import { FlatList } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useQuery } from '@apollo/client';

import { ScreenWrapper } from 'components/screen_wrapper';
import { FloatingButton } from 'components/floating_button';
import { PaymentMethod } from '../components/payment_method';
import { AppStackParamList, Routes } from 'navigation/routes';
import { GET_PAYMENTS } from 'graphql/user/queries';
import { PaymentMethod as PaymentMethodType } from 'models/payment_method';

export const PaymentMethodScreen = () => {
  const { data, loading, refetch } = useQuery<{ payments: Array<PaymentMethodType> }>(GET_PAYMENTS);

  const navigation = useNavigation<NavigationProp<AppStackParamList>>();
  const navigateToCreatePaymentMethod = () => navigation.navigate(Routes.AddPaymentMethod);
  return (
    <ScreenWrapper>
      <FlatList refreshing={loading} onRefresh={refetch} data={data?.payments} renderItem={({ item }) => <PaymentMethod item={item} />} />
      <FloatingButton onPress={navigateToCreatePaymentMethod} />
    </ScreenWrapper>
  );
};
