import { gql } from '@apollo/client';

export const GET_PROFILE = gql`
  query GetProfile {
    profile {
      id
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
      id
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
      id
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
