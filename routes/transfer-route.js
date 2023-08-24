const { Router } = require("express");
const {
  getAllTransfers,
  createTransfers,
} = require("../controller/transfer-controller.js");

const transferRouter = Router();

transferRouter.get("/", getAllTransfers);
transferRouter.post("/", createTransfers);

// Export transferRouter
module.exports = transferRouter;
