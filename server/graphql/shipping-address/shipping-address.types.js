import { buildSchema } from "graphql";

export const shippingAddressSchema = buildSchema(`#graphql
    type ShippingAddress {
        id: ID!
        name: String!
        address: String!
        zipcode: String
        country: String!
        isActive: Boolean!
        city: String!
    }

    type AddressesResponse {
        list: [ShippingAddress]
        amount: Int
    }

    type Query {
        shippingAddresses: AddressesResponse
        getShippingAddress(input: ID): ShippingAddress
    }

    input ShippingAddressInput {
        name: String!
        address: String!
        zipcode: String
        country: String!
        isActive: Boolean
        city: String!
    }

    type Mutation {
        togleAddress(input: ID): ShippingAddress
        createShippingAddress(input: ShippingAddressInput): ShippingAddress
    }
`);