import { buildSchema } from "graphql";

export const paymentSchema = buildSchema(`#graphql
    type Payment {
        id: ID!
        holderName: String!
        address: String!
        cardNumber: String!
        isActive: Boolean!
        cvv: String!
    }

    type Query {
        getPayments: [Payment]
    }

    input PaymentInput {
        holderName: String!
        cardNumber: String!
        cvv: String!
    }

    type Mutation {
        togglePayment(id: ID): Payment
        createPaymentMethod(input: PaymentInput): Payment
    }
`);