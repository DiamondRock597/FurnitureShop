import { buildSchema } from "graphql";

export const basketSchema = buildSchema(`#graphql
    type BasketItem {
       id:ID!
       productName: String!
       quantity: Int!
       productCost: Int!
       productDescription: String!
       productImage: String!
    }

    type Basket {
        items: [BasketItem]
        total: Int
    }

    type Query {
        basket: Basket
    }

    type Mutation {
        addToBasket(furnitureId: ID!, quantity: Int): ID
        updateBasketItem(basket: BasketItem): ID
        incrementBasketItem(basketItemId: ID): ID
        decrementBasketItem(basketItemId: ID): ID
        deleteBasketItem(basketItemId: ID): ID
    }
`);