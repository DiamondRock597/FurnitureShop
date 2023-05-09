import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Onboarding } from 'features/auth/onboarding';
import { AuthScreen } from '@features/auth/auth_screen';
import { TabNavigator } from './MainNavigator';
import { Routes } from './routes';
import { useUser } from 'hooks/useUser';
import { FullPageLoader } from 'components/full_page_loader';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const { user, loading } = useUser();

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={user ? Routes.TabNavigator : Routes.Onboarding}
    >
      <Stack.Screen component={Onboarding} name={Routes.Onboarding} />
      <Stack.Screen component={AuthScreen} name={Routes.Auth} />
      <Stack.Screen component={TabNavigator} name={Routes.TabNavigator} />
    </Stack.Navigator>
  );
};
