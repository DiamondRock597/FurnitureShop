import jwt from 'jsonwebtoken';

import { UserModel } from '../models/user-model.js';

export const authMiddleware = async (req, res, next) => {
    const authToken = req.get('token');
    if (!authToken) {
        req.isAuth = false;
        return next()
    };

    const verify = jwt.verify(authToken, process.env.JWT_ACCESS_SECRET);
    if (!verify || !verify.id) {
        req.isAuth = false;
        return next();
    }

    const user = await UserModel.findById(verify.id);
    if (!user) {
        req.isAuth = false;
        return next();
    }

    req.userId = user.id;
    req.isAuth = true;
    next();
}