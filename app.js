const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const databaseMiddleware = require("./middleware/database-middleware.js");
const userRouter = require("./routes/user-route.js");
const transferRouter = require("./routes/transfer-route.js");
const authenticationMiddleware = require("./middleware/authentication-middleware.js");
const swaggerUi = require("swagger-ui-express");
const yaml = require("yaml");
const fs = require("fs");
const OpenApiValidator = require("express-openapi-validator");

const openApiPath = "./docs/openapi.yaml";
const file = fs.readFileSync(openApiPath, "utf-8");
const swaggerDocument = yaml.parse(file);

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(
  OpenApiValidator.middleware({
    apiSpec: openApiPath,
    validateRequest: true,
  })
);
app.use(databaseMiddleware);

const port = process.env.PORT || 8000;

// Routes
app.use("/users", userRouter);
app.use("/transfers", authenticationMiddleware, transferRouter);

// Error handling for express-openapi-validator
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    Message: err.message,
    Errors: err.errors,
  });
});

// ================================ LISTEN =================================
app.get("/", (req, res) => {
  res.send("Welcome! 😎");
});

app.listen(port, () => {
  console.log(`🌩 Server is running on port: ${port} 🌩`);
});
