import React from 'react';
import { FlatList } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useMutation, useQuery } from '@apollo/client';

import { ScreenWrapper } from 'common/components/screen_wrapper';
import { FloatingButton } from 'common/components/floating_button';
import { PaymentMethod } from '../components/payment_method';
import { AppStackParamList, MainStackRoutes } from 'configs/navigation/routes';
import { PaymentMethod as PaymentMethodType } from 'models/payment_method';
import { GET_PAYMENTS } from '../graphql/queries';
import { DELETE_PAYMENT_METHOD, UPDATE_PAYMENT_METHOD } from '../graphql/mutations';

export const PaymentMethodScreen = () => {
  const { data, loading, refetch } = useQuery<{ profile: { payments: Array<PaymentMethodType> } }>(GET_PAYMENTS, {
    fetchPolicy: 'cache-and-network',
  });
  const [updatePaymentMethod, updateMethodMutation] = useMutation(UPDATE_PAYMENT_METHOD, { refetchQueries: [GET_PAYMENTS] });
  const [deletePaymentMethod, deleteMethodMutation] = useMutation(DELETE_PAYMENT_METHOD, { refetchQueries: [GET_PAYMENTS] });

  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const navigateToCreatePaymentMethod = () => navigation.navigate(MainStackRoutes.AddPaymentMethod);

  const togglePaymentMethod = (id: string, isActive: boolean) => updatePaymentMethod({ variables: { id, input: { isActive } } });
  const removePaymentMethod = (id: string) => deletePaymentMethod({ variables: { id } });

  const refreshing = loading || updateMethodMutation.loading || deleteMethodMutation.loading;

  return (
    <ScreenWrapper>
      <FlatList
        refreshing={refreshing}
        onRefresh={refetch}
        data={data?.profile.payments}
        renderItem={({ item }) => <PaymentMethod removePaymentMethod={removePaymentMethod} togglePayment={togglePaymentMethod} item={item} />}
      />
      <FloatingButton onPress={navigateToCreatePaymentMethod} />
    </ScreenWrapper>
  );
};
