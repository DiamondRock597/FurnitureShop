import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { Control, useForm, UseFormReturn } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { CREATE_SHIPPING_ADDRESS } from 'graphql/shipping_address/mutations';

export enum FormValues {
  Name = 'name',
  Address = 'address',
  Zipcode = 'zipcode',
  Country = 'country',
  City = 'city',
}

export interface FormTypes {
  [FormValues.Name]: string;
  [FormValues.Address]: string;
  [FormValues.Zipcode]: string;
  [FormValues.Country]: string;
  [FormValues.City]: string;
}

interface CreateAddressPayload {
  name: string;
  address: string;
  zipcode: string;
  country: string;
  city: string;
}

export interface UseCreateAddressReturn {
  control: Control<FormTypes>;
  onSubmit: () => void;
  loading: boolean;
}

export const useCreateAddress = (): UseCreateAddressReturn => {
  const navigation = useNavigation();
  const [createAddess, { loading, error, data }] = useMutation(CREATE_SHIPPING_ADDRESS);

  useEffect(() => {
    if (error) {
      Alert.alert('Something went wrong');
    }
  }, [error]);

  useEffect(() => {
    if (data?.createShippingAddress) {
      navigation.goBack();
    }
  }, [data, navigation]);

  const { control, handleSubmit }: UseFormReturn<FormTypes> = useForm<FormTypes>({
    defaultValues: {
      name: '',
      address: '',
      zipcode: '',
      country: '',
      city: '',
    },
  });

  const onCreateAddress = (input: CreateAddressPayload) => createAddess({ variables: { input } });

  const onSubmit = () => handleSubmit(onCreateAddress)();

  return { control, onSubmit, loading };
};
