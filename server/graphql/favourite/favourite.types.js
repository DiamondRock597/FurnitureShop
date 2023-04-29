export const favouriteSchema = buildSchema(`#graphql
    type Favourite {
        id: ID!
        furnitureName: String!
        furnitureImage: String!
        furnitureCost: Number!
    }

    type Query {
        getFavorites: [Favourite]
    }

    type Mutation {
        markFavourite(furnitureId: ID): Favourite
        unmarkFavourite(id: ID): Favourite
    }
`);