import { gql } from '@apollo/client';

export const GET_NAME = gql`
  query GetName {
    getName(thing: "thing") {
      name
    }
  }
`;

export const LOGIN = gql`
  query Login($input: AuthInput) {
    login(input: $input) {
      accessToken
    }
  }
`;
