import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Onboarding } from 'features/auth/onboarding';
import { AuthScreen } from '@features/auth/auth_screen';
import { tokenService } from '@services/TokenService';
import { MainNavigator, TabNavigator } from './MainNavigator';
import { Routes } from './routes';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const [token, setToken] = useState<null | string>(null);
  useEffect(() => {
    onFirstLaunch();
  }, []);

  const onFirstLaunch = async () => {
    const authToken = await tokenService.loadToken();
    setToken(authToken);
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName={token ? Routes.TabNavigator : Routes.Onboarding}
    >
      {/* <Stack.Screen component={Onboarding} name={Routes.Onboarding} /> */}
      <Stack.Screen component={TabNavigator} name={Routes.TabNavigator} />
      {/* <Stack.Screen component={AuthScreen} name={Routes.Auth} /> */}
    </Stack.Navigator>
  );
};
