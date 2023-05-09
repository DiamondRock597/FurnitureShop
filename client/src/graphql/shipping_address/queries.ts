import { gql } from '@apollo/client';

export const GET_AMOUNT_OF_ADDRESSES = gql`
  query GetAmountOfAddresses {
    shippingAddresses {
      amount
    }
  }
`;
