import { buildSchema } from "graphql";

export const paymentSchema = buildSchema(`#graphql
    input PaymentInput {
        holderName: String
        cardNumber: String
        cvv: String
        isActive: Boolean
    }

    type Mutation {
        updatePaymentMethod(id: ID, input: PaymentInput): ID
        createPaymentMethod(input: PaymentInput): ID
    }
`);