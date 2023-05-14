import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Onboarding } from 'features/auth/onboarding';
import { AuthScreen } from '@features/auth/auth_screen';
import { AddressScreen } from 'features/shipping_address/address_list';
import { CreateAddressScreen } from '@features/shipping_address/creating_address';
import { PaymentMethodScreen } from 'features/payment/method_list';
import { useUser } from '@hooks/useUser';
import { FullPageLoader } from '@components/full_page_loader';
import { TabNavigator } from './MainNavigator';
import { AppStackParamList, Routes } from './routes';
import { Header } from 'components/ui/header';
import { CreatePaymentScreen } from 'features/payment/creating_payment';
import { ProductScreen } from 'features/product/product';
import { CartScreen } from 'features/product/cart';
import { routeNames } from 'constants/route_names';
import { CheckoutScreen } from 'features/product/checkout';
import { SuccessfulOrderScreen } from 'features/product/successful_order';

const Stack = createNativeStackNavigator<AppStackParamList>();

const routesWithHeader = [
  Routes.ShippingAddress,
  Routes.AddShippingAddress,
  Routes.PaymentMethod,
  Routes.AddPaymentMethod,
  Routes.Cart,
  Routes.Checkout,
];

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
          return isRouteInList ? <Header name={routeNames[route.name]} isBasketVisible={isRouteInList} isBackButtonVisible={isRouteInList} /> : null;
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
      <Stack.Screen component={CreatePaymentScreen} name={Routes.AddPaymentMethod} />

      <Stack.Screen component={ProductScreen} name={Routes.Product} />
      <Stack.Screen component={CartScreen} name={Routes.Cart} />
      <Stack.Screen component={CheckoutScreen} name={Routes.Checkout} />
      <Stack.Screen component={SuccessfulOrderScreen} name={Routes.SuccessfulOrder} />
    </Stack.Navigator>
  );
};
