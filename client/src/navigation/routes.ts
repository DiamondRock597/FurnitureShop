export enum Routes {
  Auth = 'Auth',
  TabNavigator = 'TabNavigator',
  Onboarding = 'Onboarding',
  Home = 'Home',
  Favorites = 'Favorites',
  Profile = 'Profile',
  ShippingAddress = 'ShippingAddress',
}

export type AppStackParamList = {
  [Routes.Auth]: undefined;
  [Routes.TabNavigator]: undefined;
  [Routes.Onboarding]: undefined;
  [Routes.ShippingAddress]: undefined;
};

export type MainTabParamList = {
  [Routes.Profile]: undefined;
  [Routes.Home]: undefined;
};
