const {userData} = require ('../Controller/userController')
const express = require ('express');

const userRouter = express.Router()
userRouter.post('/', userData);
userRouter.post('/profile', (req,res)=>{
    res.status(200).json({
        message:"Hello world is gay"
    })
});

module.exports = userRouter;