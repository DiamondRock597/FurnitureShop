class UserResolver {
    users = [{ id: 1, name: "No name" }];

    getAllUsers = (req, res) => res.json(this.users);

    getUserById = (req, res) => {
        const user = this.users.find((item) => item.id == req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.json(500);
        }
    }
}

export const userResolver = new UserResolver();