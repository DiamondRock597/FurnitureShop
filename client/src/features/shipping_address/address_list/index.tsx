import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useQuery } from '@apollo/client';
import { FlatList } from 'react-native';

import { ScreenWrapper } from 'components/screen_wrapper';
import { FloatingButton } from 'components/floating_button';
import { AddressItem } from '../components/address_item';
import { AppStackParamList, Routes } from 'navigation/routes';
import { GET_SHIPPING_ADDRESSES } from 'graphql/user/queries';
import { ShippingAddress } from 'models/shipping_address/shipping_address';

import { styles } from './styles';

export const AddressScreen = () => {
  const { data, loading, refetch } = useQuery<{ profile: { shippingAddresses: Array<ShippingAddress> } }>(GET_SHIPPING_ADDRESSES, {
    fetchPolicy: 'no-cache',
  });
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const navigateToCreatAddress = () => navigation.navigate(Routes.AddShippingAddress);

  return (
    <ScreenWrapper>
      <FlatList
        style={styles.listContainer}
        refreshing={loading}
        onRefresh={refetch}
        data={data?.profile.shippingAddresses}
        renderItem={({ item }) => <AddressItem item={item} />}
      />
      <FloatingButton onPress={navigateToCreatAddress} />
    </ScreenWrapper>
  );
};
