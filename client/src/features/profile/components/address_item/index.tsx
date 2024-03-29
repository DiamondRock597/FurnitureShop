import React from 'react';
import { Text, View } from 'react-native';

import { ShippingAddress } from 'models/shipping_address/shipping_address';
import { CheckboxController } from 'common/components/checkbox_controller';

import { styles } from './styles';

interface Props {
  item: ShippingAddress;
  isCheckboxVisible?: boolean;
  toggleAddress: (id: string, isActive: boolean) => void;
  removeShippingAddress: (id: string) => void;
}

export const AddressItem: React.FC<Props> = ({ item, isCheckboxVisible, toggleAddress, removeShippingAddress }) => {
  const onChange = (value: boolean) => toggleAddress(item.id, value);
  const onRemove = () => removeShippingAddress(item.id);

  return (
    <View style={styles.container}>
      {isCheckboxVisible ? (
        <CheckboxController onRemoveItem={onRemove} onChange={onChange} isActive={item.isActive} title="shipping address" />
      ) : null}
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
};
