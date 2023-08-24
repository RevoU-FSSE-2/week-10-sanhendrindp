const { Router } = require("express");
const { register, login } = require("../service/user-service.js");

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);

// Export userRouter
module.exports = userRouter;
