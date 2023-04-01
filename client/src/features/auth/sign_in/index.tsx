import React from 'react';
import { Controller, ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import { View } from 'react-native';

import { FormValues, FormTypes, useSignIn, UseSignInReturn } from './useSignIn';
import { Button, RoundedType } from '@components/button';
import { TransparentButton } from '@components/transparent_button';
import { Input } from '@components/input';

import { style } from './style';

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
    <View style={style.container}>
      <Controller
        control={control}
        name={FormValues.Email}
        rules={{ required: 'Email is required' }}
        render={({ field, fieldState: { error } }: ControllerProps<FormValues.Email>) => (
          <Input value={field.value} onChangeText={field.onChange} name="Email" keyboardType="email-address" error={error?.message} />
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
          <Input value={field.value} onChangeText={field.onChange} secureTextEntry name="Password" error={error?.message} />
        )}
      />
      <View style={style.button}>
        <TransparentButton text="Forgot Password" onPress={onSubmit} />
        <Button text="SIGN IN" roundedType={RoundedType.Medium} onPress={onSubmit} />
        <TransparentButton text="SIGN UP" onPress={goToSignUp} />
      </View>
    </View>
  );
};
