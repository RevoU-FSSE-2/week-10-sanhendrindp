const { Router } = require("express");
const {
  getAllTransfers,
  createTransfers,
} = require("../service/transfer-service.js");

const transferRouter = Router();

transferRouter.get("/", getAllTransfers);
transferRouter.post("/", createTransfers);

// Export transferRouter
module.exports = transferRouter;
