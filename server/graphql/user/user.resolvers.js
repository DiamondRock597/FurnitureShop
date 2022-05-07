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
    }
}