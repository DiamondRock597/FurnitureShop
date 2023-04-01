import { buildSchema } from "graphql";

export const userSchema = buildSchema(`
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

    type Response {
        name: String
    }

    type Query {
        getName(thing: String): Response
        login(input: AuthInput): AuthResponse
    }

    type Mutation {
        createUser(input: RegisterInput): AuthResponse
    }
`);