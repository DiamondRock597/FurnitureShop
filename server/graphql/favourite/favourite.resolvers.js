import { GraphQLError } from "graphql";

import { favouriteService } from "../../services/favourite.service.js";

export const favouriteResolvers = {
    Query: {
        getFavorites: async (root, args, { isAuth, userId }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }
                return favouriteService.getList(userId);
            } catch (error) {
                return error;
            }
        }
    },
    Mutation: {
        markFavourite: async (root, { furnitureId }, { isAuth, userId }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }
                return favouriteService.markFavourite(userId, furnitureId);
            } catch (error) {
                return error;
            }
        },
        unmarkFavourite: async (root, { id }, { isAuth }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }
                return favouriteService.unmarkFavourite(id);
            } catch (error) {
                return error;
            }
        }
    }
}