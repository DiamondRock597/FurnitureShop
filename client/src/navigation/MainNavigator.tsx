import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '@features/home/home_screen';
import { MainStackParamList, Routes } from './routes';
import { TabIcon } from 'components/tab_icon';
import { RouteProp } from '@react-navigation/native';
import { Colors } from 'constants/colors';

const BottomTab = createBottomTabNavigator();

const screenOptions = ({ route }: { route: RouteProp<MainStackParamList, Routes.TabNavigator> }) => ({
  headerShown: false,
  tabBarIcon: ({ color }) => <TabIcon name={route.name} color={color} />,
  tabBarShowLabel: false,
  tabBarActiveTintColor: Colors.SecondaryBlackBold,
  tabBarInactiveTintColor: Colors.SecondaryGreyLight,
});

export const TabNavigator = () => (
  <BottomTab.Navigator screenOptions={screenOptions}>
    <BottomTab.Screen name={Routes.Home} component={HomeScreen} />
    <BottomTab.Screen name={Routes.Favorites} component={HomeScreen} />
  </BottomTab.Navigator>
);
