import React from 'react';
import { Text, View } from 'react-native';

import { ShippingAddress } from 'models/shipping_address/shipping_address';
import { CheckboxController } from 'components/checkbox_controller';

import { styles } from './styles';

interface Props {
  item: ShippingAddress;
}

export const AddressItem: React.FC<Props> = ({ item }) => (
  <View style={styles.container}>
    <CheckboxController isActive={item.isActive} title="shipping address" />
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
