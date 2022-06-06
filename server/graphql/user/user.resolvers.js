import { userController } from "../../controllers/user-controller.js"

export const userResolvers = {
    Query: {
        getAllUsers: () => {
            return [
                {
                    id: 0,
                    username: 'Vasya'
                }
            ]
        }
    },
    Mutation: {
        register: async (root, { input }, context, info) => await userController.registration(input),
        login: async (root, { input }, context, info) => await userController.login(input)
    }
}