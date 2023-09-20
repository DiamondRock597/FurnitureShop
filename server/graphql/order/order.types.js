import { buildSchema } from "graphql";

export const orderSchema = buildSchema(`#graphql
    type Order {
        id: ID
        status: String!
        createdAt: String!
        quantity: Int!
        totalAmount: Int!
        delieveryTax: Int!
    }

    type Query {
        orders: [Order]
        activeOrder: Order
    }

    type Mutation {
        createOrder(paymentId: ID, shippingAddressId: ID): Order
    }
`);