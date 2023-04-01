import React from 'react';
import { View, SafeAreaView } from 'react-native';

import { style } from './style';

export const ScreenWrapper: React.FC = ({ children }) => (
  <SafeAreaView style={style.container}>
    <View style={style.container}>{children}</View>
  </SafeAreaView>
);
