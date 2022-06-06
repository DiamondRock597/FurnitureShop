import { buildSchema } from "graphql";

export const userSchema = buildSchema(`
    type User {
        id: ID
        email: String
    }

    type Query {
        getAllUsers: [User]
    }

    input AuthInput {
        email: String!
        password: String!
    }

    type AuthResponse {
        user: User
        accessToken: String
    }

    type Mutation {
        register(input: AuthInput): AuthResponse
        login(input: AuthInput): AuthResponse
    }
`);