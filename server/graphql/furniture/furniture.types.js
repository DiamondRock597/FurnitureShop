import { buildSchema } from "graphql";

export const furnitureSchema = buildSchema(`#graphql
    type Furniture {
        id: ID!
        name: String!
        cost: Int!
        description: String!
    }

    type Query {
        getFurnitures: [Furniture]
    }
`);