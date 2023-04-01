import { useCallback, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';
import { useLazyQuery } from '@apollo/client';
import { Control, useForm, UseFormReturn } from 'react-hook-form';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { LOGIN } from '@graphql/user/queries';
import { LoginPayload } from '@models/user/login_payload';
import { AuthResponse } from '@models/user/auth_response';
import { tokenService } from '@services/TokenService';
import { MainStackParamList, Routes } from '@navigation/routes';

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
  const [login, loginData] = useLazyQuery<{ login: AuthResponse }, { input: LoginPayload }>(LOGIN);
  const { navigate }: NavigationProp<MainStackParamList> = useNavigation();

  const { control, handleSubmit }: UseFormReturn<FormTypes> = useForm<FormTypes>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    const userData = loginData.data?.login;
    const errorMessage = loginData.error?.message;

    if (errorMessage) {
      Alert.alert('Error', errorMessage);
      return;
    }

    if (userData) {
      tokenService.saveToken(userData.accessToken);
      navigate(Routes.TabNavigator);
    }
  }, [loginData, navigate]);

  const onLogin = useCallback((input: LoginPayload) => login({ variables: { input } }), [login]);

  const onSubmit = useCallback(() => handleSubmit(onLogin)(), [onLogin, handleSubmit]);

  return useMemo(
    () => ({
      onSubmit,
      control,
    }),
    [onSubmit, control],
  );
};
