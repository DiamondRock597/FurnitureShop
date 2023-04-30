import { buildSchema } from "graphql";

export const basketSchema = buildSchema(`#graphql
    type BasketItem {
       name: String!
       quantity: Int!
       cost: Int!
       description: String!
    }

    type Query {
        getBasket: [BasketItem]
    }

    type Mutation {
        addToBasket(furnitureId: ID, quantity: Int): ID
        incrementBasketItem(basketItemId: ID): ID
        decrementBasketItem(basketItemId: ID): ID
        deleteBasketItem(basketItemId: ID): ID
    }
`);