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
