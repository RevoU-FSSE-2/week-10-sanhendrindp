const express = require("express");
const dotenv = require("dotenv");
const databaseMiddleware = require("./middleware/database-middleware.js");
const userRouter = require("./routes/user-route.js");
const transferRouter = require("./routes/transfer-route.js");

const app = express();

app.use(express.json());
app.use(databaseMiddleware);

// Routes
app.use("/users", userRouter);
app.use("/transfers", transferRouter);

// ================================ LISTEN =================================
app.get("/", (req, res) => {
  res.send("Welcome! 😎");
});

dotenv.config();
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`🌩 Server is running on port: ${port} 🌩`);
});
