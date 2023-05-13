import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Onboarding } from 'features/auth/onboarding';
import { AuthScreen } from '@features/auth/auth_screen';
import { AddressScreen } from 'features/shipping_address/address_list';
import { CreateAddressScreen } from '@features/shipping_address/creating_address';
import { PaymentMethodScreen } from 'features/payment_method/method_list';
import { useUser } from '@hooks/useUser';
import { FullPageLoader } from '@components/full_page_loader';
import { TabNavigator } from './MainNavigator';
import { AppStackParamList, Routes } from './routes';
import { Header } from 'components/ui/header';

const Stack = createNativeStackNavigator<AppStackParamList>();

const routesWithHeader = [Routes.ShippingAddress, Routes.AddShippingAddress, Routes.PaymentMethod];

export const AppNavigator = () => {
  const { isSignedIn, loading } = useUser();

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ route }) => {
          const isRouteInList = routesWithHeader.includes(route.name);
          return isRouteInList ? <Header name={route.name} isBasketVisible={isRouteInList} isBackButtonVisible={isRouteInList} /> : null;
        },
      }}
      initialRouteName={isSignedIn ? Routes.TabNavigator : Routes.Onboarding}
    >
      <Stack.Screen component={Onboarding} name={Routes.Onboarding} />
      <Stack.Screen component={AuthScreen} name={Routes.Auth} />
      <Stack.Screen component={TabNavigator} name={Routes.TabNavigator} />
      <Stack.Screen component={AddressScreen} name={Routes.ShippingAddress} />
      <Stack.Screen component={CreateAddressScreen} name={Routes.AddShippingAddress} />

      <Stack.Screen component={PaymentMethodScreen} name={Routes.PaymentMethod} />
    </Stack.Navigator>
  );
};
