import { GraphQLError } from "graphql";

import { furnitureService } from "../../services/furniture.service.js";

export const furnitureResolovers = {
    Query: {
        getFurnitures: async (root, args, { isAuth }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }
                return furnitureService.getList();
            } catch (error) {
                return error;
            }
        }
    }
}