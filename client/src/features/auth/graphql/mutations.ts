import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation Register($input: RegisterInput) {
    createUser(input: $input) {
      user {
        id
      }
      accessToken
    }
  }
`;

export const LOGIN = gql`
  mutation Login($input: LoginInput) {
    login(input: $input) {
      accessToken
    }
  }
`;
