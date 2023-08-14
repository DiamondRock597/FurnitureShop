import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useForm, UseFormReturn } from 'react-hook-form';

import { CREATE_PAYMENT_METHOD } from '../../graphql/mutations';

export enum FormValues {
  HolderName = 'holderName',
  CardNumber = 'cardNumber',
  CVV = 'cvv',
}

export type FormTypes = {
  [FormValues.HolderName]: string;
  [FormValues.CardNumber]: string;
  [FormValues.CVV]: string;
};

export const usePayment = () => {
  const navigation = useNavigation();
  const [createPayment, { error, loading, data }] = useMutation(CREATE_PAYMENT_METHOD);

  useEffect(() => {
    if (error) {
      Alert.alert('Something went wrong');
    }
  }, [error]);

  useEffect(() => {
    if (data?.createPaymentMethod) {
      navigation.goBack();
    }
  }, [data, navigation]);

  const { control, handleSubmit }: UseFormReturn<FormTypes> = useForm<FormTypes>({
    defaultValues: {
      holderName: '',
      cardNumber: '',
      cvv: '',
    },
  });

  const onCreatePaymentMethod = (input: FormTypes) => createPayment({ variables: { input } });

  const onSubmit = () => handleSubmit(onCreatePaymentMethod)();

  return {
    control,
    onSubmit,
    loading,
  };
};
