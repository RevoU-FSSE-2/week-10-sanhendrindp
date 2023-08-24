const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const databaseMiddleware = require("./middleware/database-middleware.js");
const userRouter = require("./routes/user-route.js");
const transferRouter = require("./routes/transfer-route.js");
const authenticationMiddleware = require("./middleware/authentication-middleware.js");

const app = express();

app.use(express.json());
app.use(databaseMiddleware);

const port = process.env.PORT || 8000;

// Routes
app.use("/users", userRouter);
app.use("/transfers", authenticationMiddleware, transferRouter);

// ================================ LISTEN =================================
app.get("/", (req, res) => {
  res.send("Welcome! 😎");
});

app.listen(port, () => {
  console.log(`🌩 Server is running on port: ${port} 🌩`);
});
