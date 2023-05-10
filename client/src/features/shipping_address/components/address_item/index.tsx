import React from 'react';
import { Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { Colors } from 'constants/colors';

import { styles } from './styles';

export const AddressItem = () => (
  <View style={styles.container}>
    <View style={styles.controlContainer}>
      <CheckBox
        style={styles.checkboxContainer}
        onCheckColor={Colors.Primary}
        onTintColor={Colors.SecondaryBlack}
        onFillColor={Colors.SecondaryBlack}
        boxType="square"
        tintColor={Colors.SecondaryBlack}
        onAnimationType="one-stroke"
        animationDuration={0.1}
        tintColors={{ true: Colors.SecondaryBlack, false: Colors.SecondaryBlack }}
      />
      <Text style={styles.controlTitle}>Use as the shipping address</Text>
    </View>
    <View style={styles.addressCard}>
      <View style={styles.header}>
        <Text style={styles.name}>Bruno Fernandes</Text>
      </View>
      <View style={styles.addressContainer}>
        <Text style={styles.address}>25 rue Robert Latouche, Nice, 06200, Côte</Text>
        <Text style={styles.address}>D’azur, France</Text>
      </View>
    </View>
  </View>
);
