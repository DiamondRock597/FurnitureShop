import React from 'react';
import { Controller, ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import { View, Text, TouchableOpacity } from 'react-native';

import { FormValues, FormTypes, useSignUp, UseSignUpReturn } from './useSignUp';
import { Button, RoundedType } from '@components/button';
import { AuthInput } from 'features/auth/components/input';

import { style } from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface Props {
  goToSignIn: () => void;
}

interface ControllerProps<T extends FormValues> {
  field: ControllerRenderProps<FormTypes, T>;
  fieldState: ControllerFieldState;
}

const PASSWORD_RULES = {
  required: 'Password is required',
  minLength: { value: 6, message: 'Password should have more than 6 symbols' },
  maxLength: { value: 16, message: 'Password should have less than 16 sybmols' },
};

export const SignUp: React.FC<Props> = ({ goToSignIn }: Props) => {
  const { control, onSubmit }: UseSignUpReturn = useSignUp();

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" enableOnAndroid contentContainerStyle={style.scrollContainer}>
      <View style={style.container}>
        <Controller
          control={control}
          name={FormValues.Name}
          rules={{ required: 'Name is required' }}
          render={({ field, fieldState: { error } }: ControllerProps<FormValues.Name>) => (
            <AuthInput value={field.value} onChangeText={field.onChange} name="Name" keyboardType="name-phone-pad" error={error?.message} />
          )}
        />
        <Controller
          control={control}
          name={FormValues.Email}
          rules={{ required: 'Email is required' }}
          render={({ field, fieldState: { error } }: ControllerProps<FormValues.Email>) => (
            <AuthInput value={field.value} onChangeText={field.onChange} name="Email" keyboardType="email-address" error={error?.message} />
          )}
        />
        <Controller
          control={control}
          name={FormValues.Password}
          rules={PASSWORD_RULES}
          render={({ field, fieldState: { error } }: ControllerProps<FormValues.Password>) => (
            <AuthInput value={field.value} onChangeText={field.onChange} secureTextEntry name="Password" error={error?.message} />
          )}
        />
        <Controller
          control={control}
          name={FormValues.Confirmation}
          rules={PASSWORD_RULES}
          render={({ field, fieldState: { error } }: ControllerProps<FormValues.Confirmation>) => (
            <AuthInput value={field.value} onChangeText={field.onChange} secureTextEntry name="Confirm Password" error={error?.message} />
          )}
        />
        <View style={style.button}>
          <Button text="SIGN UP" roundedType={RoundedType.Medium} onPress={onSubmit} />
        </View>
        <TouchableOpacity style={style.navigationButton} onPress={goToSignIn}>
          <Text style={style.question}>Already have account?</Text>
          <Text style={style.authType}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};
