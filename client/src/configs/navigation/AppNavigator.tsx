import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useReactiveVar } from '@apollo/client';

import { Onboarding } from 'features/auth/screens/onboarding';
import { AuthScreen } from 'features/auth/screens/Auth.screen';
import { AddressScreen } from 'features/profile/screens/AddressList.screen';
import { CreateAddressScreen } from 'features/profile/screens/creating_address';
import { PaymentMethodScreen } from 'features/profile/screens/PaymentMethodList.screen';
import { TabNavigator } from './MainNavigator';
import { AppStackParamList, MainStackRoutes, MainTabRoutes } from './routes';
import { Header } from 'common/components//header';
import { CreatePaymentScreen } from 'features/profile/screens/creating_payment';
import { ProductScreen } from 'features/product/screens/product';
import { CartScreen } from 'features/order/screens/cart';
import { routeNames } from 'common/constants/route_names';
import { CheckoutScreen } from 'features/order/screens/checkout';
import { SuccessfulOrderScreen } from 'features/order/screens/successful_order';
import { authTokenVar } from 'configs/graphql/client';

const Stack = createNativeStackNavigator<AppStackParamList>();

const routesWithHeader = [
  MainStackRoutes.ShippingAddress,
  MainStackRoutes.AddShippingAddress,
  MainStackRoutes.PaymentMethod,
  MainStackRoutes.AddPaymentMethod,
  MainStackRoutes.Cart,
  MainStackRoutes.Checkout,
];

// const isMainRoute = (route: string): route is MainStackRoutes => Object.values(MainStackRoutes).includes(route as MainStackRoutes);

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
      initialRouteName={token ? MainStackRoutes.TabNavigator : MainStackRoutes.Onboarding}
    >
      <Stack.Screen component={Onboarding} name={MainStackRoutes.Onboarding} />
      <Stack.Screen component={AuthScreen} name={MainStackRoutes.Auth} />
      <Stack.Screen component={TabNavigator} name={MainStackRoutes.TabNavigator} />
      <Stack.Screen component={AddressScreen} name={MainStackRoutes.ShippingAddress} />
      <Stack.Screen component={CreateAddressScreen} name={MainStackRoutes.AddShippingAddress} />

      <Stack.Screen component={PaymentMethodScreen} name={MainStackRoutes.PaymentMethod} />
      <Stack.Screen component={CreatePaymentScreen} name={MainStackRoutes.AddPaymentMethod} />

      <Stack.Screen component={ProductScreen} name={MainStackRoutes.Product} />
      <Stack.Screen component={CartScreen} name={MainStackRoutes.Cart} />
      <Stack.Screen component={CheckoutScreen} name={MainStackRoutes.Checkout} />
      <Stack.Screen component={SuccessfulOrderScreen} name={MainStackRoutes.SuccessfulOrder} />
    </Stack.Navigator>
  );
};
