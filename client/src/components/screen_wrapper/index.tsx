import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';

import { style } from './style';

export const ScreenWrapper: React.FC = ({ children }) => (
  <SafeAreaView style={StyleSheet.absoluteFill}>
    <View style={style.container}>{children}</View>
  </SafeAreaView>
);
