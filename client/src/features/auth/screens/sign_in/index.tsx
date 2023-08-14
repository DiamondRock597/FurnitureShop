import React from 'react';
import { Controller, ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import { View } from 'react-native';

import { FormValues, FormTypes, useSignIn, UseSignInReturn } from './useSignIn';
import { Button, RoundedType } from '@components/button';
import { TransparentButton } from '@components/transparent_button';
import { AuthInput } from 'features/auth/components/input';

import { style } from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface Props {
  goToSignUp: () => void;
}

interface ControllerProps<T extends FormValues> {
  field: ControllerRenderProps<FormTypes, T>;
  fieldState: ControllerFieldState;
}

export const SignIn: React.FC<Props> = ({ goToSignUp }) => {
  const { control, onSubmit }: UseSignInReturn = useSignIn();

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" enableOnAndroid contentContainerStyle={style.scrollContainer}>
      <View style={style.container}>
        <Controller
          control={control}
          name={FormValues.Email}
          rules={{ required: 'Email is required' }}
          render={({ field, fieldState: { error } }: ControllerProps<FormValues.Email>) => (
            <AuthInput
              value={field.value}
              onChangeText={field.onChange}
              name="Email"
              keyboardType="email-address"
              error={error?.message}
              autoCapitalize="none"
            />
          )}
        />
        <Controller
          control={control}
          name={FormValues.Password}
          rules={{
            required: 'Password is required',
            minLength: { value: 6, message: 'Password should have more than 6 symbols' },
            maxLength: { value: 16, message: 'Password should have less than 16 sybmols' },
          }}
          render={({ field, fieldState: { error } }: ControllerProps<FormValues.Password>) => (
            <AuthInput
              value={field.value}
              autoCapitalize="none"
              onChangeText={field.onChange}
              secureTextEntry
              name="Password"
              error={error?.message}
            />
          )}
        />
        <View style={style.button}>
          <Button text="SIGN IN" roundedType={RoundedType.Medium} onPress={onSubmit} />
          <TransparentButton text="SIGN UP" onPress={goToSignUp} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
