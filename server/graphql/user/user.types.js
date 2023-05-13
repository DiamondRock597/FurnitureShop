import { buildSchema } from "graphql";

export const userSchema = buildSchema(`#graphql
     type ShippingAddress {
        id: ID!
        name: String!
        address: String!
        zipcode: String
        country: String!
        isActive: Boolean!
        city: String!
    }

    type User {
        id: ID
        email: String
        name: String
        shippingAddresses: [ShippingAddress]
        addressesCount: Int
    }

    type AuthResponse {
        user: User
        accessToken: String
    }

    input AuthInput {
        email: String!
        password: String!
    }

    input RegisterInput {
        email: String!
        password: String!
        name: String!
    }

    type Query {
        profile: User!
    }

    type Mutation {
        createUser(input: RegisterInput): AuthResponse
        login(input: AuthInput): AuthResponse
    }
`);