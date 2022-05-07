import { buildSchema } from "graphql";

export const userSchema = buildSchema(`
    type User {
        id: ID
        username: String
    }

    type Query {
        getAllUsers: [User]
    }
`);