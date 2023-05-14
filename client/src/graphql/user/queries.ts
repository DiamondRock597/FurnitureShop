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
      paymentsCount
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

export const GET_PAYMENTS = gql`
  query {
    profile {
      payments {
        holderName
        id
        cardNumber
        cvv
        isActive
      }
    }
  }
`;
