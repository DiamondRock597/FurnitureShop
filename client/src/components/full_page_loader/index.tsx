import React from 'react';
import { View } from 'react-native';

import { Loader } from 'components/loader';

import { styles } from './styles';

export const FullPageLoader = () => (
  <View style={styles.container}>
    <Loader />
  </View>
);
