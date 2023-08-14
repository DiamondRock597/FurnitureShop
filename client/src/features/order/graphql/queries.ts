import { gql } from '@apollo/client';

export const GET_CART = gql`
  query GetCart {
    basket {
      id
      productName
      quantity
      productCost
    }
  }
`;
