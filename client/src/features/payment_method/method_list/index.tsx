import React from 'react';
import { FlatList } from 'react-native';

import { ScreenWrapper } from 'components/screen_wrapper';
import { FloatingButton } from 'components/floating_button';
import { PaymentCard } from '../components/payment_card';

import { styles } from './styles';

export const PaymentMethodScreen = () => (
  <ScreenWrapper>
    <FlatList style={styles.listContainer} data={[1, 2]} renderItem={({}) => <PaymentCard />} />
    <FloatingButton />
  </ScreenWrapper>
);
