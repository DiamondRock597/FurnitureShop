import React from 'react';
import { View } from 'react-native';

import { CheckboxController } from 'components/checkbox_controller';
import { PaymentCard } from '../payment_card';

import { styles } from './styles';

export const PaymentMethod = () => (
  <View style={styles.paymentContainer}>
    <PaymentCard cardNumber="1234567890123456" expireDate="05/23" />
    <CheckboxController isActive={false} title="payment method" />
  </View>
);
