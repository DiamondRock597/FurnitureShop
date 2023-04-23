export const paymentSchema = buildSchema(`#graphql
    type Payment {
        id: ID!
        holderName: String!
        address: String!
        cardNumber: String!
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
        toglePayment: (id: ID) Payment
        createPaymentMethod(input: PaymentInput): Payment
    }
`);