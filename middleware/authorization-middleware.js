const jwt = require("jsonwebtoken");
const { JWT_SIGN } = require("../config/jwt.js");

const authorizationMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({
      Messages: "Unauthorized! 🚫",
    });
  } else {
    const token = authHeader.split(" ")[1];

    try {
      const decodeToken = jwt.verify(token, JWT_SIGN);

      //  If role is approver/maker next, else unauthorize
      if (decodeToken.role === "approver" || decodeToken.role === "maker") {
        next();
      } else {
        res.status(401).json({
          Messages: "Unauthorized! 🚫",
        });
      }
    } catch (error) {
      res.status(400).json({
        Message: error.message,
      });
    }
  }
};

// Export authorizationMiddleware
module.exports = authorizationMiddleware;
