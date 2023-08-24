const { Router } = require("express");
const { register, login } = require("../controller/user-controller.js");

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);

// Export userRouter
module.exports = userRouter;
