import { useCallback, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';
import { Control, useForm, UseFormReturn } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackRoutes, AppStackParamList } from 'configs/navigation/routes';

import { REGISTER } from '../../graphql/mutations';
import { tokenRepository } from 'configs/repositories/TokenRepository';
import { RegisterPayload } from 'models/user/register_payload';
import { AuthResponse } from 'models/user/auth_response';

export enum FormValues {
  Email = 'email',
  Password = 'password',
  Name = 'name',
  Confirmation = 'confirmation',
}
export interface FormTypes {
  [FormValues.Email]: string;
  [FormValues.Name]: string;
  [FormValues.Password]: string;
  [FormValues.Confirmation]: string;
}

export interface UseSignUpReturn {
  control: Control<FormTypes>;
  onSubmit: () => void;
}

export const useSignUp: () => UseSignUpReturn = () => {
  const [onRegister, registerData] = useMutation<{ createUser: AuthResponse }, { input: RegisterPayload }>(REGISTER);
  const { navigate }: NavigationProp<AppStackParamList> = useNavigation();

  const { control, handleSubmit, setError }: UseFormReturn<FormTypes> = useForm<FormTypes>({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      confirmation: '',
    },
  });

  useEffect(() => {
    const userData = registerData.data?.createUser;
    const errorMessage = registerData.error?.message;

    if (errorMessage) {
      Alert.alert('Ups!', errorMessage);
      return;
    }

    if (userData) {
      tokenRepository.saveToken(userData.accessToken);
      navigate(MainStackRoutes.TabNavigator);
    }
  }, [registerData, navigate]);

  const handleRegister = useCallback(
    (data: FormTypes) => {
      if (data.confirmation !== data.password) {
        setError(FormValues.Confirmation, { message: 'Passwords are not similar' });
        return;
      }

      const input = {
        email: data.email,
        password: data.password,
        name: data.name,
      };

      onRegister({ variables: { input } });
    },
    [onRegister, setError]
  );

  const onSubmit = useCallback(() => handleSubmit<FormValues>(handleRegister)(), [handleRegister, handleSubmit]);

  return useMemo(
    () => ({
      onSubmit,
      control,
    }),
    [onSubmit, control]
  );
};
