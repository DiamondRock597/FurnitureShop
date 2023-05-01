import { buildSchema } from "graphql";

export const orderSchema = buildSchema(`#graphql
    type Order {
        id: ID
        status: String!
        createdAt: String!
        quantity: Int!
        totalAmount: Int!
    }

    type Query {
        getList: [Order]
    }

    type Mutation {
        createOrder(paymentId: ID, shippingAddress: ID): Order
    }
`);