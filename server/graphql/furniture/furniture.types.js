export const furnitureSchema = buildSchema(`#graphql
    type Furniture {
        id: ID!
        name: String!
        cost: Number!
        description: String!
        image: String!
    }

    type Query {
        getFurnitures: [Furniture]
    }
`);