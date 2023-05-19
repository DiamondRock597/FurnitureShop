import { gql } from '@apollo/client';

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
