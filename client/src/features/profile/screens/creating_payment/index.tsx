import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View } from 'react-native';
import { Controller } from 'react-hook-form';

import { ScreenWrapper } from 'common/components/screen_wrapper';
import { PaymentCard } from '../../components/payment_card';
import { Input } from 'common/components/input';
import { Button } from 'common/components/button';
import { FormValues, usePayment } from './usePayment';

import { styles } from './styles';

export const CreatePaymentScreen = () => {
  const { control, onSubmit, loading } = usePayment();

  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView enableOnAndroid style={styles.scrollContainer} contentContainerStyle={styles.listContent}>
        <PaymentCard />
        <Controller
          control={control}
          name={FormValues.HolderName}
          rules={{ required: 'Holder name is required' }}
          render={({ field, fieldState: { error } }) => (
            <Input value={field.value} error={!!error} title="Card Holder Name" onChangeText={field.onChange} placeholder="Ex: Bruno Pham " />
          )}
        />
        <Controller
          control={control}
          name={FormValues.CardNumber}
          rules={{ required: 'Card number is required', maxLength: 16, minLength: 16 }}
          render={({ field, fieldState: { error } }) => (
            <Input
              value={field.value}
              error={!!error}
              title="Card Number"
              onChangeText={field.onChange}
              placeholder="Ex: 1234 1234 1234 1234"
              secureTextEntry
            />
          )}
        />
        <View style={styles.infoContainer}>
          <Controller
            control={control}
            name={FormValues.CVV}
            rules={{ required: 'CVV is required', maxLength: 3 }}
            render={({ field, fieldState: { error } }) => (
              <Input
                containerStyle={styles.shortInputContainer}
                value={field.value}
                error={!!error}
                title="CVV"
                onChangeText={field.onChange}
                placeholder="Ex: 123 "
              />
            )}
          />
          <Input containerStyle={styles.shortInputContainer} title="Expiration Date" placeholder="Ex: 05/23" />
        </View>
      </KeyboardAwareScrollView>
      <Button isLoading={loading} onPress={onSubmit} text="ADD NEW CARD" />
    </ScreenWrapper>
  );
};
