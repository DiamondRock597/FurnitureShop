export enum Routes {
  Auth = 'Auth',
  TabNavigator = 'TabNavigator',
  Onboarding = 'Onboarding',
  Home = 'Home',
  Favorites = 'Favorites',
}

export type MainStackParamList = {
  [Routes.Auth]: undefined;
  [Routes.TabNavigator]: undefined;
  [Routes.Onboarding]: undefined;
};
