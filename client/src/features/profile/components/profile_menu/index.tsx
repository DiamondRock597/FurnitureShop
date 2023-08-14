import React from 'react';
import { ScrollView } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ProfileMenuItem } from './ProfileMenuItem';
import { AppStackParamList, MainStackRoutes } from 'configs/navigation/routes';

import { styles } from './styles';

interface Props {
  addressesCount?: number;
  paymentsCount?: number;
}

export const ProfileMenu: React.FC<Props> = ({ addressesCount, paymentsCount }) => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const navigateToAddresses = () => navigation.navigate(MainStackRoutes.ShippingAddress);

  const navigateToPaymentMethod = () => navigation.navigate(MainStackRoutes.PaymentMethod);

  return (
    <ScrollView style={styles.scrollContainer}>
      <ProfileMenuItem title="My orders" subtitle="Already have 3 orders" />
      <ProfileMenuItem title="Shipping Addresses" subtitle={`${addressesCount} Addresses`} onPress={navigateToAddresses} />
      <ProfileMenuItem title="Payment method" subtitle={`You have ${paymentsCount} cards`} onPress={navigateToPaymentMethod} />
      {/* <ProfileMenuItem title="Settings" subtitle="Notification, Password, FAQ, Contact" /> */}
    </ScrollView>
  );
};
