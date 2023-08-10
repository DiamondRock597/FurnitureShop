import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from 'features/product/screens/home';
import { ProfileScreen } from 'features/profile/screens/Profile.screen';
import { MainTabParamList, Routes } from './routes';
import { TabIcon } from 'common/components/tab_icon';
import { Colors } from 'common/constants/colors';

const BottomTab = createBottomTabNavigator<MainTabParamList>();

export const TabNavigator = () => (
  <BottomTab.Navigator
    screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      tabBarActiveTintColor: Colors.SecondaryBlackBold,
      tabBarInactiveTintColor: Colors.SecondaryGreyLight,
      tabBarIcon: ({ color }) => <TabIcon name={route.name} color={color} />,
      headerShown: false,
    })}
  >
    <BottomTab.Screen name={Routes.Home} component={HomeScreen} />
    <BottomTab.Screen name={Routes.Profile} component={ProfileScreen} />
  </BottomTab.Navigator>
);
