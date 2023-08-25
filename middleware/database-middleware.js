const { MongoClient } = require("mongodb");

let db;
const databaseMiddleware = async (req, res, next) => {
  // Connect to MongoDB
  // default local: mongodb://127.0.0.1:27017
  // Atlas MongoDB: mongodb+srv://sanhendrindwip:MzDgt5ZYeL9MvvTv@cluster0.elyckcb.mongodb.net/?retryWrites=true&w=majority
  const mongoClient = await new MongoClient(
    "mongodb://mongo:ca4Kdg7CTuCtMz0ERGNm@containers-us-west-85.railway.app:6938"
  ).connect();
  db = mongoClient.db("revou-week-10");

  req.db = db;

  next();
};

// Export database-middleware
module.exports = databaseMiddleware;
