import { gql } from '@apollo/client';

export const DELETE_CART_ITEM = gql`
  mutation DeleteCartItem($id: ID) {
    deleteBasketItem(basketItemId: $id)
  }
`;

export const INCREMENT_BASKET_ITEM = gql`
  mutation IncrementBasketItem($id: ID) {
    incrementBasketItem(basketItemId: $id)
  }
`;

export const DECREMENT_BASKET_ITEM = gql`
  mutation DecrementBasketItem($id: ID) {
    incincrementBasketItem(basketItemId: $id)
  }
`;
