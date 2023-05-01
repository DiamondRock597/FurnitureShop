import { buildSchema } from "graphql";

export const basketSchema = buildSchema(`#graphql
    type BasketItem {
       id:ID!
       productName: String!
       quantity: Int!
       productCost: Int!
       productDescription: String!
    }

    type Query {
        getBasket: [BasketItem]
    }

    type Mutation {
        addToBasket(furnitureId: ID!, quantity: Int): BasketItem
        incrementBasketItem(basketItemId: ID): ID
        decrementBasketItem(basketItemId: ID): ID
        deleteBasketItem(basketItemId: ID): ID
    }
`);