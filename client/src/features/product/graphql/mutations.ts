import { gql } from '@apollo/client';

export const ADD_TO_BASKET = gql`
  mutation AddToBasket($furnitureId: ID!, $quantity: Int) {
    addToBasket(furnitureId: $furnitureId, quantity: $quantity)
  }
`;
