import { gql } from '@apollo/client';

export const GET_CART = gql`
  query GetCart {
    basket {
      items {
        id
        productName
        quantity
        productCost
        productImage
      }
      total
    }
  }
`;
