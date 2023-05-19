import React from 'react';
import { Controller } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ScreenWrapper } from 'components/screen_wrapper';
import { Input } from 'components/input';
import { FormValues, useCreateAddress } from './useCreateAddress';

import { styles } from './styles';
import { Button } from 'components/button';

export const CreateAddressScreen = () => {
  const { control, loading, onSubmit } = useCreateAddress();
  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer} style={styles.container}>
        <Controller
          control={control}
          name={FormValues.Name}
          rules={{ required: 'Name is required' }}
          render={({ field, fieldState: { error } }) => <Input value={field.value} error={!!error} onChangeText={field.onChange} title="Full name" />}
        />
        <Controller
          control={control}
          name={FormValues.Address}
          rules={{ required: 'Address is required' }}
          render={({ field, fieldState: { error } }) => <Input value={field.value} error={!!error} onChangeText={field.onChange} title="Address" />}
        />
        <Controller
          control={control}
          name={FormValues.Zipcode}
          rules={{ required: 'Zipcode is required' }}
          render={({ field, fieldState: { error } }) => (
            <Input value={field.value} error={!!error} onChangeText={field.onChange} keyboardType="number-pad" title="Zipcode (Postal Code)" />
          )}
        />
        <Controller
          control={control}
          name={FormValues.Country}
          rules={{ required: 'Country is required' }}
          render={({ field, fieldState: { error } }) => <Input value={field.value} error={!!error} onChangeText={field.onChange} title="Country" />}
        />
        <Controller
          control={control}
          name={FormValues.City}
          rules={{ required: 'City is required' }}
          render={({ field, fieldState: { error } }) => <Input value={field.value} error={!!error} onChangeText={field.onChange} title="City" />}
        />
      </KeyboardAwareScrollView>
      <Button onPress={onSubmit} text="ADD NEW CARD" isLoading={loading} />
    </ScreenWrapper>
  );
};
