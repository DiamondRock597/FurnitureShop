import { useCallback, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';
import { useMutation } from '@apollo/client';
import { Control, useForm, UseFormReturn } from 'react-hook-form';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { LoginPayload } from 'models/user/login_payload';
import { AuthResponse } from 'models/user/auth_response';
import { tokenRepository } from 'configs/repositories/TokenRepository';
import { MainStackRoutes, MainTabParamList, MainTabRoutes, Routes } from 'configs/navigation/routes';
import { LOGIN } from '../../graphql/mutations';

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
  const [login] = useMutation<{ login: AuthResponse }, { input: LoginPayload }>(LOGIN, {
    onCompleted: (data) => {
      if (data) {
        navigate(MainStackRoutes.TabNavigator);
        tokenRepository.saveToken(data.login.accessToken);
      }
    },
    onError: (error) => {
      if (error?.message) {
        Alert.alert('Error', error.message);
        return;
      }
    },
  });
  const { navigate }: NavigationProp<MainTabParamList> = useNavigation();

  const { control, handleSubmit }: UseFormReturn<FormTypes> = useForm<FormTypes>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

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
