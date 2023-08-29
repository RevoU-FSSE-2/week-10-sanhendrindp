const { Router } = require("express");
const {
  getAllTransfers,
  createTransfers,
  approveTransfer,
} = require("../controller/transfer-controller.js");
const authorizationMiddleware = require("../middleware/authorization-middleware.js");

const transferRouter = Router();

transferRouter.get("/", getAllTransfers);
// transferRouter.post("/", authorizationMiddleware, createTransfers);
transferRouter.post("/", createTransfers);
transferRouter.put("/approve", authorizationMiddleware, approveTransfer);

// Export transferRouter
module.exports = transferRouter;
