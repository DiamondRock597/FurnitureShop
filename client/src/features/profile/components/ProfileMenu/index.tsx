import React from 'react';
import { useQuery } from '@apollo/client';
import { ScrollView } from 'react-native';

import { ProfileMenuItem } from './ProfileMenuItem';
import { GET_AMOUNT_OF_ADDRESSES } from 'graphql/shipping_address/queries';

import { styles } from './styles';

export const ProfileMenu: React.FC = () => {
  const { data } = useQuery(GET_AMOUNT_OF_ADDRESSES);

  return (
    <ScrollView style={styles.scrollContainer}>
      <ProfileMenuItem title="My orders" subtitle="Already have 3 orders" />
      <ProfileMenuItem title="Shipping Addresses" subtitle={`${data?.addressesCount} Addresses`} />
      <ProfileMenuItem title="Payment method" subtitle="You have 2 cards" />
      <ProfileMenuItem title="Settings" subtitle="Notification, Password, FAQ, Contact" />
    </ScrollView>
  );
};
