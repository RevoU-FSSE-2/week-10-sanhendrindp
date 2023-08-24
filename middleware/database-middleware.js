const { MongoClient } = require("mongodb");

let db;
const databaseMiddleware = async (req, res, next) => {
  // Connect to mongodb
  const mongoClient = await new MongoClient(
    "mongodb://127.0.0.1:27017"
  ).connect();
  db = mongoClient.db("revou-week-10");

  req.db = db;

  next();
};

// Export database-middleware
module.exports = databaseMiddleware;
