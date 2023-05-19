import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Colors } from 'constants/colors';

import { styles } from './styles';

export const FullPageLoader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={Colors.SecondaryBlack} />
  </View>
);
