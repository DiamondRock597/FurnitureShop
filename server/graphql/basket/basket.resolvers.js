import { GraphQLError } from "graphql";

import { basketService } from "../../services/basket.service.js";

export const basketResolvers = {
    Query: {
        basket: async (root, args, { isAuth, userId }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }

                const basket = await basketService.getBasketList(userId);
                return basket;
            } catch (error) {
                return error;
            }
        }
    },
    Mutation: {
        addToBasket: async (root, { furnitureId, quantity }, { isAuth, userId }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }

                return basketService.addToBasket(userId, furnitureId, quantity);
            } catch (error) {
                return error;
            }
        },
        incrementBasketItem: async (root, { basketItemId }, { isAuth }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }

                return basketService.incrementItem(basketItemId);
            } catch (error) {
                return error;
            }
        },
        decrementBasketItem: async (root, { basketItemId }, { isAuth }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }

                return basketService.decrementItem(basketItemId);
            } catch (error) {
                return error;
            }
        },
        deleteBasketItem: async (root, { basketItemId }, { isAuth }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }

                return basketService.deleteItem(basketItemId);
            } catch (error) {
                return error;
            }
        }
    }
}