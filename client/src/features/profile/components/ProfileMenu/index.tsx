import React from 'react';
import { useQuery } from '@apollo/client';
import { ScrollView } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ProfileMenuItem } from './ProfileMenuItem';
import { GET_AMOUNT_OF_ADDRESSES } from 'graphql/shipping_address/queries';
import { AppStackParamList, Routes } from 'navigation/routes';

import { styles } from './styles';

export const ProfileMenu: React.FC = () => {
  const { data } = useQuery(GET_AMOUNT_OF_ADDRESSES);
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const navigateToAddresses = () => navigation.navigate(Routes.ShippingAddress);

  return (
    <ScrollView style={styles.scrollContainer}>
      <ProfileMenuItem title="My orders" subtitle="Already have 3 orders" />
      <ProfileMenuItem title="Shipping Addresses" subtitle={`${data?.addressesCount} Addresses`} onPress={navigateToAddresses} />
      <ProfileMenuItem title="Payment method" subtitle="You have 2 cards" />
      <ProfileMenuItem title="Settings" subtitle="Notification, Password, FAQ, Contact" />
    </ScrollView>
  );
};
