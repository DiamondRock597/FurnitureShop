import { buildSchema } from "graphql";

export const shippingAddressSchema = buildSchema(`#graphql
    input ShippingAddressInput {
        name: String
        address: String
        zipcode: String
        country: String
        city: String
        id: ID
        isActive: Boolean
    }


    type Mutation {
        createShippingAddress(input: ShippingAddressInput): ID
        updateShippingAddress(input: ShippingAddressInput): ID
    }
`);