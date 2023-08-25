const { Router } = require("express");
const {
  getAllTransfers,
  createTransfers,
} = require("../controller/transfer-controller.js");
const authorizationMiddleware = require("../middleware/authorization-middleware.js");

const transferRouter = Router();

transferRouter.get("/", getAllTransfers);
transferRouter.post("/", authorizationMiddleware, createTransfers);

// Export transferRouter
module.exports = transferRouter;
