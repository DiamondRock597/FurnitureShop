import React from 'react';
import { View, Text, Image } from 'react-native';

import { CheckboxController } from 'components/checkbox_controller';

import { styles } from './styles';

export const PaymentCard = () => (
  <View style={styles.paymentContainer}>
    <View style={styles.cardContainer}>
      <Image source={require('@assets/images/master_card.png')} />
      <Text style={styles.cardNumber}>**** **** **** 1234</Text>
      <View style={styles.cardInfoContainer}>
        <View>
          <Text style={styles.infoTitle}>Card Holder Name</Text>
          <Text style={styles.information}>Jennyfer Doe</Text>
        </View>
        <View>
          <Text style={styles.infoTitle}>Expire Date</Text>
          <Text style={styles.information}>05/23</Text>
        </View>
      </View>
    </View>
    <CheckboxController isActive={false} title="payment method" />
  </View>
);
