import { GraphQLError } from "graphql";

import { FavouriteModel } from '../models/favourite.model.js';

class FavouriteService {
    getList = async (userId) => {
        if (!userId) {
            throw new GraphQLError('Does not exist');
        }

        return FavouriteModel.find({ userId }).sort('-createdAt').populate('furniture').exec();
    }

    markFavourite = async (userId, furnitureId) => {
        if (!userId) {
            throw new GraphQLError('Does not exist');
        }

        return FavouriteModel.create({ userId, furnitureId });
    }

    unmarkFavourite = async (favouriteId) => {
        if (!favouriteId) {
            throw new GraphQLError('Favourite was not found');
        }

        return FavouriteModel.findByIdAndDelete(favouriteId);
    }
}

export const favouriteService = new FavouriteService();