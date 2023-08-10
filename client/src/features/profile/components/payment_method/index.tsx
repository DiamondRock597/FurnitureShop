import React from 'react';
import { View } from 'react-native';

import { CheckboxController } from 'common/components/checkbox_controller';
import { PaymentCard } from '../payment_card';
import { PaymentMethod as Payment } from 'models/payment_method';

import { styles } from './styles';

interface Props {
  item: Payment;
  togglePayment: (id: string, value: boolean) => void;
}

export const PaymentMethod: React.FC<Props> = ({ item, togglePayment }) => {
  const onChange = (value: boolean) => togglePayment(item.id, value);
  return (
    <View style={styles.paymentContainer}>
      <PaymentCard isActive={item.isActive} cardNumber={item.cardNumber} holderName={item.holderName} expireDate="05/23" />
      <CheckboxController onChange={onChange} isActive={item.isActive} title="payment method" />
    </View>
  );
};
