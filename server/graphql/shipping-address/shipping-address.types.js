import { buildSchema } from "graphql";

export const shippingAddress = buildSchema(`
    type ShippingAddress {
        id: ID
        name: String
        address: String
        isActive: Boolean
    }

    type Query {
        getShippingAdresses(): [ShippingAddress]
    }

    type Mutation {
        setActiveAddress:(input: ID): Void
    }
`);