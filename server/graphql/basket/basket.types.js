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
        totalAmount: Int
    }

    input UpdateBasketItemInput {
        id:ID!
        quantity: Int!
    }

    type Query {
        basket: Basket
    }

    type Mutation {
        addToBasket(furnitureId: ID!, quantity: Int): ID
        updateBasketItem(basketItem: UpdateBasketItemInput): ID
        deleteBasketItem(basketItemId: ID): ID
    }
`);