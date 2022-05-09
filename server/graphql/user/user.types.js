import { buildSchema } from "graphql";

export const userSchema = buildSchema(`
    type User {
        id: ID
        email: String
        password: String
    }

    type Query {
        getAllUsers: [User]
    }

    input RegisterInput {
        email: String!
        password: String!
    }

    type Mutation {
        register(input: RegisterInput): User
    }
`);