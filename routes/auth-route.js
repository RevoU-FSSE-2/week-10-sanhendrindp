const { Router } = require("express");
const { register, login } = require("../service/auth-service.js");

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

// Export auth-route
module.exports = authRouter;
