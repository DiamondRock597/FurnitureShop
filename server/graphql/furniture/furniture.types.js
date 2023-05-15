import { buildSchema } from "graphql";

export const furnitureSchema = buildSchema(`#graphql
    type Furniture {
        id: ID!
        name: String!
        cost: Int!
        description: String!
        image: String!
    }

    type Query {
        furnitures: [Furniture]
        furniture(id: ID): Furniture
    }
`);