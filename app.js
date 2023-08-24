const express = require("express");
const databaseMiddleware = require("./middleware/database-middleware.js");

const app = express();

app.use(express.json());
app.use(databaseMiddleware);
