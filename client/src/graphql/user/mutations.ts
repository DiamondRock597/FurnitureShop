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
