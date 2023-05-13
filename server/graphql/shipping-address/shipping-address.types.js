import { buildSchema } from "graphql";

export const shippingAddressSchema = buildSchema(`#graphql
    input ShippingAddressInput {
        name: String!
        address: String!
        zipcode: String
        country: String!
        city: String!
    }

    type Mutation {
        createShippingAddress(input: ShippingAddressInput): ID
    }
`);