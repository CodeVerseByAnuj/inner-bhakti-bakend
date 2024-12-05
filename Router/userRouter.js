const {signup} = require ('../Controller/userController')
const express = require ('express');

const userRouter = express.Router()

userRouter.post('/signup',signup);
// userRouter.post('/login',login);
// userRouter.post('/profile',profile);

module.exports = userRouter;