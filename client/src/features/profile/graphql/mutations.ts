import { gql } from '@apollo/client';

export const CREATE_SHIPPING_ADDRESS = gql`
  mutation CreateShippingAddress($input: ShippingAddressInput) {
    createShippingAddress(input: $input)
  }
`;

export const UPDATE_SHIPPING_ADDRESS = gql`
  mutation UpdateShippingAddress($input: ShippingAddressInput) {
    updateShippingAddress(input: $input)
  }
`;

export const CREATE_PAYMENT_METHOD = gql`
  mutation CreatePaymentMethod($input: PaymentInput) {
    createPaymentMethod(input: $input)
  }
`;

export const UPDATE_PAYMENT_METHOD = gql`
  mutation UpdatePaymentMethod($id: ID, $input: PaymentInput) {
    updatePaymentMethod(id: $id, input: $input)
  }
`;

export const DELETE_PAYMENT_METHOD = gql`
  mutation DeletePaymentMethod($id: ID) {
    deletePaymentMethod(id: $id)
  }
`;

export const DELETE_SHIPPING_ADDRESS = gql`
  mutation DeleteShippingAddress($id: ID) {
    deleteShippingAddress(id: $id)
  }
`;
