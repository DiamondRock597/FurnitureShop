import React from 'react';
import { FlatList } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useMutation, useQuery } from '@apollo/client';

import { ScreenWrapper } from 'components/screen_wrapper';
import { FloatingButton } from 'components/floating_button';
import { PaymentMethod } from '../components/payment_method';
import { AppStackParamList, Routes } from 'configs/navigation/routes';
import { GET_PAYMENTS } from 'graphql/user/queries';
import { PaymentMethod as PaymentMethodType } from 'models/payment_method';
import { UPDATE_PAYMENT_METHOD } from 'graphql/payments/mutations';

export const PaymentMethodScreen = () => {
  const { data, loading, refetch } = useQuery<{ profile: { payments: Array<PaymentMethodType> } }>(GET_PAYMENTS);
  const [updatePaymentMethod, mutation] = useMutation(UPDATE_PAYMENT_METHOD, { refetchQueries: [GET_PAYMENTS] });
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();
  const navigateToCreatePaymentMethod = () => navigation.navigate(Routes.AddPaymentMethod);

  const togglePaymentMethod = (id: string, isActive: boolean) => updatePaymentMethod({ variables: { id, input: { isActive } } });

  return (
    <ScreenWrapper>
      <FlatList
        refreshing={loading || mutation.loading}
        onRefresh={refetch}
        data={data?.profile.payments}
        renderItem={({ item }) => <PaymentMethod togglePayment={togglePaymentMethod} item={item} />}
      />
      <FloatingButton onPress={navigateToCreatePaymentMethod} />
    </ScreenWrapper>
  );
};
