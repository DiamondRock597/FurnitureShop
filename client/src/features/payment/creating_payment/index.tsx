import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View } from 'react-native';

import { ScreenWrapper } from 'components/screen_wrapper';
import { PaymentCard } from '../components/payment_card';
import { Input } from 'components/input';

import { styles } from './styles';
import { Button } from 'components/button';

export const CreatePaymentScreen = () => (
  <ScreenWrapper>
    <KeyboardAwareScrollView style={styles.scrollContainer} contentContainerStyle={styles.listContent}>
      <PaymentCard />
      <Input title="Card Holder Name" placeholder="Ex: Bruno Pham " />
      <Input title="Card Number" placeholder="Ex: 1234 1234 1234 1234" secureTextEntry />
      <View style={styles.infoContainer}>
        <Input containerStyle={styles.shortInputContainer} title="CVV" placeholder="Ex: 123 " />
        <Input containerStyle={styles.shortInputContainer} title="Expiration Date" placeholder="Ex: 05/23" />
      </View>
    </KeyboardAwareScrollView>
    <Button text="ADD NEW CARD" />
  </ScreenWrapper>
);
