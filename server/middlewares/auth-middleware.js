import jwt from 'jsonwebtoken';

import { UserModel } from '../models/user.model.js';

export const authMiddleware = async (req, res, next) => {
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkVtYWlsIiwiaWQiOiI2MmEzNDQ2MjRjZDc5Y2UyOWFhZmRhNTYiLCJpYXQiOjE2NTUzODA0MDJ9.zKFFCzb8o0o1Rx_3PBuhuoH8SiPN8zWAXH3NIwXQ7WY';
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