import { gql } from '@apollo/client';

export const GET_PROFILE = gql`
  query GetProfile {
    profile {
      name
      email
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
