import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';

import { style } from './style';

export const ScreenWrapper: React.FC = ({ children }) => (
  <SafeAreaView style={style.safeArea}>
    <StatusBar barStyle="dark-content" />
    <View style={style.container}>{children}</View>
  </SafeAreaView>
);
