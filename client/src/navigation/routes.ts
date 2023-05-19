import { NavigatorScreenParams } from '@react-navigation/native';

export enum Routes {
  Auth = 'Auth',
  TabNavigator = 'TabNavigator',
  Onboarding = 'Onboarding',
  Home = 'Home',
  Favorites = 'Favorites',
  Profile = 'Profile',
  ShippingAddress = 'ShippingAddress',
  AddShippingAddress = 'AddShippingAddress',
  PaymentMethod = 'PaymentMethod',
  AddPaymentMethod = 'AddPaymentMethod',
  Product = 'Product',
  Cart = 'Cart',
  Checkout = 'Checkout',
  SuccessfulOrder = 'SuccessfulOrder',
}

export type AppStackParamList = {
  [Routes.Auth]: undefined;
  [Routes.TabNavigator]: NavigatorScreenParams<MainTabParamList>;
  [Routes.Onboarding]: undefined;
  [Routes.ShippingAddress]: undefined;
  [Routes.AddShippingAddress]: undefined;
  [Routes.PaymentMethod]: undefined;
  [Routes.AddPaymentMethod]: undefined;
  [Routes.Product]: {
    productId: string;
  };
  [Routes.Cart]: undefined;
  [Routes.Checkout]: undefined;
  [Routes.SuccessfulOrder]: undefined;
};

export type MainTabParamList = {
  [Routes.Profile]: undefined;
  [Routes.Home]: undefined;
};
