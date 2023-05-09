import { buildSchema } from "graphql";

export const userSchema = buildSchema(`#graphql
    type User {
        id: ID
        email: String
        name: String
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

    type AuthResponse {
        user: User
        accessToken: String
    }

    type Query {
        profile: User!
    }

    type Mutation {
        createUser(input: RegisterInput): AuthResponse
        login(input: AuthInput): AuthResponse
    }
`);