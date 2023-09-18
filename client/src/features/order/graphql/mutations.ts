import { gql } from '@apollo/client';

export const DELETE_CART_ITEM = gql`
  mutation DeleteCartItem($id: ID) {
    deleteBasketItem(basketItemId: $id)
  }
`;

export const UPDATE_BASKET_ITEM = gql`
  mutation UpdateBasketItem($basketItem: UpdateBasketItemInput) {
    updateBasketItem(basketItem: $basketItem)
  }
`;
