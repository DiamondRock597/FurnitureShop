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

    type Query {
        getShippingAddresses: [ShippingAddress]
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
        setActiveAddress(input: ID): ID
        createShippingAddress(input: ShippingAddressInput): ShippingAddress
    }
`);