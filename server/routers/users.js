import { Router } from "express";

import { userResolver } from "../resolvers/users.js";

export const router = new Router();

router.get('/users', userResolver.getAllUsers);
router.get('/user/:id', userResolver.getUserById);