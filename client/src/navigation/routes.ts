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
}

export type AppStackParamList = {
  [Routes.Auth]: undefined;
  [Routes.TabNavigator]: undefined;
  [Routes.Onboarding]: undefined;
  [Routes.ShippingAddress]: undefined;
  [Routes.AddShippingAddress]: undefined;
  [Routes.PaymentMethod]: undefined;
  [Routes.AddPaymentMethod]: undefined;
  [Routes.Product]: {
    productId: string;
  };
};

export type MainTabParamList = {
  [Routes.Profile]: undefined;
  [Routes.Home]: undefined;
};
