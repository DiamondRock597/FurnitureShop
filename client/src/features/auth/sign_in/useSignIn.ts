import { useCallback, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';
import { useMutation } from '@apollo/client';
import { Control, useForm, UseFormReturn } from 'react-hook-form';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { LoginPayload } from '@models/user/login_payload';
import { AuthResponse } from '@models/user/auth_response';
import { tokenRepository } from 'repositories/TokenRepository';
import { MainTabParamList, Routes } from '@navigation/routes';
import { LOGIN } from 'graphql/user/mutations';

export enum FormValues {
  Email = 'email',
  Password = 'password',
}

export interface FormTypes {
  [FormValues.Email]: string;
  [FormValues.Password]: string;
}

export interface UseSignInReturn {
  control: Control<FormTypes>;
  onSubmit: () => void;
}

export const useSignIn: () => UseSignInReturn = () => {
  const [login, { data, error }] = useMutation<{ login: AuthResponse }, { input: LoginPayload }>(LOGIN);
  const { navigate }: NavigationProp<MainTabParamList> = useNavigation();

  const { control, handleSubmit }: UseFormReturn<FormTypes> = useForm<FormTypes>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    const userData = data?.login;
    const errorMessage = error?.message;

    if (errorMessage) {
      Alert.alert('Error', errorMessage);
      return;
    }

    if (userData) {
      tokenRepository.saveToken(userData.accessToken);
      navigate(Routes.TabNavigator);
    }
  }, [data, error, navigate]);

  const onLogin = useCallback((input: LoginPayload) => login({ variables: { input } }), [login]);

  const onSubmit = useCallback(() => handleSubmit(onLogin)(), [onLogin, handleSubmit]);

  return useMemo(
    () => ({
      onSubmit,
      control,
    }),
    [onSubmit, control]
  );
};
