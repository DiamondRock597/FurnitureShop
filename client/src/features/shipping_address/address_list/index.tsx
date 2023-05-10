import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ScreenWrapper } from 'components/screen_wrapper';
import { AddressItem } from '../components/address_item';
import { FloatingButton } from 'components/floating_button';
import { AppStackParamList, Routes } from 'navigation/routes';

export const AddressScreen = () => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const navigateToCreatAddress = () => navigation.navigate(Routes.AddShippingAddress);

  return (
    <ScreenWrapper>
      <AddressItem />
      <FloatingButton onPress={navigateToCreatAddress} />
    </ScreenWrapper>
  );
};
