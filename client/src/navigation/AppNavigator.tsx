import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Onboarding } from 'features/auth/onboarding';
import { AuthScreen } from '@features/auth/auth_screen';
import { AddressScreen } from 'features/shipping_address/address_list';
import { CreateAddressScreen } from '@features/shipping_address/creating_address';
import { useUser } from '@hooks/useUser';
import { FullPageLoader } from '@components/full_page_loader';
import { TabNavigator } from './MainNavigator';
import { AppStackParamList, Routes } from './routes';
import { Header } from 'components/ui/header';

const Stack = createNativeStackNavigator<AppStackParamList>();

const routesWithHeader = [Routes.ShippingAddress, Routes.AddShippingAddress];

export const AppNavigator = () => {
  const { user, loading } = useUser();

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ route }) => (routesWithHeader.includes(route.name) ? <Header name={route.name} /> : null),
      }}
      initialRouteName={user ? Routes.TabNavigator : Routes.Onboarding}
    >
      <Stack.Screen component={Onboarding} name={Routes.Onboarding} />
      <Stack.Screen component={AuthScreen} name={Routes.Auth} />
      <Stack.Screen component={TabNavigator} name={Routes.TabNavigator} />
      <Stack.Screen component={AddressScreen} name={Routes.ShippingAddress} />
      <Stack.Screen component={CreateAddressScreen} name={Routes.AddShippingAddress} />
    </Stack.Navigator>
  );
};
