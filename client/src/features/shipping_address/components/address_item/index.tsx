import React from 'react';
import { Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { Colors } from 'constants/colors';
import { ShippingAddress } from 'models/shipping_address/shipping_address';

import { styles } from './styles';

interface Props {
  item: ShippingAddress;
}

export const AddressItem: React.FC<Props> = ({ item }) => (
  <View style={styles.container}>
    <View style={styles.controlContainer}>
      <CheckBox
        value={item.isActive}
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
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.addressContainer}>
        <Text style={styles.address} numberOfLines={2}>
          {item.address}, {item.zipcode}, {item.city}, {item.country}
        </Text>
      </View>
    </View>
  </View>
);
