import { NavigatorScreenParams } from '@react-navigation/native';

export enum MainStackRoutes {
  Auth = 'Auth',
  TabNavigator = 'TabNavigator',
  Onboarding = 'Onboarding',
  Favorites = 'Favorites',
  ShippingAddress = 'ShippingAddress',
  AddShippingAddress = 'AddShippingAddress',
  PaymentMethod = 'PaymentMethod',
  AddPaymentMethod = 'AddPaymentMethod',
  Product = 'Product',
  Cart = 'Cart',
  Checkout = 'Checkout',
  SuccessfulOrder = 'SuccessfulOrder',
}

export enum MainTabRoutes {
  Home = 'Home',
  Profile = 'Profile',
}

export type AppStackParamList = {
  [MainStackRoutes.Auth]: undefined;
  [MainStackRoutes.TabNavigator]: NavigatorScreenParams<MainTabParamList>;
  [MainStackRoutes.Onboarding]: undefined;
  [MainStackRoutes.ShippingAddress]: undefined;
  [MainStackRoutes.AddShippingAddress]: undefined;
  [MainStackRoutes.PaymentMethod]: undefined;
  [MainStackRoutes.AddPaymentMethod]: undefined;
  [MainStackRoutes.Product]: {
    productId: string;
  };
  [MainStackRoutes.Cart]: undefined;
  [MainStackRoutes.Checkout]: undefined;
  [MainStackRoutes.SuccessfulOrder]: undefined;
};

export type MainTabParamList = {
  [MainTabRoutes.Profile]: undefined;
  [MainTabRoutes.Home]: undefined;
};
