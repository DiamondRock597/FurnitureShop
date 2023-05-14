import { buildSchema } from "graphql";

export const paymentSchema = buildSchema(`#graphql
    input PaymentInput {
        holderName: String!
        cardNumber: String!
        cvv: String!
    }

    type Mutation {
        togglePayment(id: ID): ID
        createPaymentMethod(input: PaymentInput): ID
    }
`);