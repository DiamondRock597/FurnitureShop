import React from 'react';
import { View } from 'react-native';

import { CheckboxController } from 'components/checkbox_controller';
import { PaymentCard } from '../payment_card';
import { PaymentMethod as Payment } from 'models/payment_method';

import { styles } from './styles';

interface Props {
  item: Payment;
}

export const PaymentMethod: React.FC<Props> = ({ item }) => (
  <View style={styles.paymentContainer}>
    <PaymentCard cardNumber={item.cardNumber} holderName={item.holderName} expireDate="05/23" />
    <CheckboxController isActive={item.isActive} title="payment method" />
  </View>
);
