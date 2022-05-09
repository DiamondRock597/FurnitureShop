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
        register: (root, { input }, context, info) => {
            console.log(input);
            return {
                id: 0,
                ...input
            }

        }
    }
}