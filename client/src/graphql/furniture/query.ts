import { gql } from '@apollo/client';

export const GET_FURNITURES = gql`
  query {
    furnitures {
      id
      name
      image
      cost
    }
  }
`;

export const GET_FURNITURE = gql`
  query GetFurniture($id: ID) {
    furniture(id: $id) {
      name
      id
      image
      description
      cost
    }
  }
`;
