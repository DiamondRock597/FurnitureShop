import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Onboarding } from 'features/auth/screens/onboarding';
import { AuthScreen } from 'features/auth/screens/Auth.screen';
import { AddressScreen } from 'features/profile/screens/AddressList.screen';
import { CreateAddressScreen } from 'features/profile/screens/creating_address';
import { PaymentMethodScreen } from 'features/profile/screens/PaymentMethodList.screen';
import { TabNavigator } from './MainNavigator';
import { AppStackParamList, Routes } from './routes';
import { Header } from 'components/header';
import { CreatePaymentScreen } from 'features/profile/screens/creating_payment';
import { ProductScreen } from 'features/product/screens/product';
import { CartScreen } from 'features/order/screens/cart';
import { routeNames } from 'common/constants/route_names';
import { CheckoutScreen } from 'features/order/checkout';
import { SuccessfulOrderScreen } from 'features/order/screens/successful_order';
import { useReactiveVar } from '@apollo/client';
import { authTokenVar } from 'configs/graphql/client';

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
  const token = useReactiveVar(authTokenVar);

  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ route }) => {
          const isRouteInList = routesWithHeader.includes(route.name);
          return isRouteInList ? <Header name={routeNames[route.name]} isBasketVisible={isRouteInList} isBackButtonVisible={isRouteInList} /> : null;
        },
      }}
      initialRouteName={token ? Routes.TabNavigator : Routes.Onboarding}
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
