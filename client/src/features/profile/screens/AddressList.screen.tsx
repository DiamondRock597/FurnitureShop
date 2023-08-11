import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useMutation, useQuery } from '@apollo/client';
import { FlatList } from 'react-native';

import { ScreenWrapper } from 'common/components/screen_wrapper';
import { FloatingButton } from 'common/components/floating_button';
import { AddressItem } from '../components/address_item';
import { AppStackParamList, MainStackRoutes } from 'configs/navigation/routes';
import { ShippingAddress } from 'models/shipping_address/shipping_address';
import { GET_SHIPPING_ADDRESSES } from '../graphql/queries';
import { UPDATE_SHIPPING_ADDRESS } from '../graphql/mutations';

export const AddressScreen = () => {
  const { data, loading, refetch } = useQuery<{ profile: { shippingAddresses: Array<ShippingAddress> } }>(GET_SHIPPING_ADDRESSES, {
    fetchPolicy: 'no-cache',
  });
  const [updateShippingAddress] = useMutation(UPDATE_SHIPPING_ADDRESS, { refetchQueries: [GET_SHIPPING_ADDRESSES] });
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const navigateToCreatAddress = () => navigation.navigate(MainStackRoutes.AddShippingAddress);
  const toggleShippingAddress = (id: string, isActive: boolean) => updateShippingAddress({ variables: { input: { id, isActive } } });

  return (
    <ScreenWrapper>
      <FlatList
        refreshing={loading}
        onRefresh={refetch}
        data={data?.profile.shippingAddresses}
        renderItem={({ item }) => <AddressItem toggleAddress={toggleShippingAddress} isCheckboxVisible item={item} />}
      />
      <FloatingButton onPress={navigateToCreatAddress} />
    </ScreenWrapper>
  );
};
