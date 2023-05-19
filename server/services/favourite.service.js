import { GraphQLError } from "graphql";

import { FavouriteModel } from '../models/favourite.model.js';
import { FavouriteDto } from "../dto/favourite.dto.js";

class FavouriteService {
    getList = async (userId) => {
        if (!userId) {
            throw new GraphQLError('Does not exist');
        }

        const favorites = await FavouriteModel.find({ userId }).sort('-createdAt').populate('furniture').exec()
        return favorites.map(FavouriteDto.parse);
    }

    markFavourite = async (userId, furnitureId) => {
        if (!userId) {
            throw new GraphQLError('Does not exist');
        }
        const favourite = await FavouriteModel.create({ userId, furnitureId });
        return FavouriteDto.parse(favourite);
    }

    unmarkFavourite = async (favouriteId) => {
        if (!favouriteId) {
            throw new GraphQLError('Favourite was not found');
        }

        const deleteFavourite = await FavouriteModel.findByIdAndDelete(favouriteId);
        return FavouriteDto.parse(deleteFavourite);
    }
}

export const favouriteService = new FavouriteService();