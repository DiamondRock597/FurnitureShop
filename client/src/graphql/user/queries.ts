import { gql } from '@apollo/client';

export const CHECK_AUTHORIZED_PROFILE = gql`
  query CheckAuthorizedProfile {
    profile {
      id
    }
  }
`;

export const GET_PROFILE = gql`
  query GetProfile {
    profile {
      name
      email
      addressesCount
    }
  }
`;

export const GET_SHIPPING_ADDRESSES = gql`
  query {
    profile {
      shippingAddresses {
        name
        id
        zipcode
        country
        city
        isActive
        address
      }
    }
  }
`;
