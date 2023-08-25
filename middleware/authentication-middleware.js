const jwt = require("jsonwebtoken");
const { JWT_SIGN } = require("../config/jwt.js");

const authenticationMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  //   console.log(authHeader, "authHeader");

  //  If there is no token then unauthorized, else next()
  if (!authHeader) {
    res.status(401).json({
      Message: "Unauthorized! 🚫",
    });
  } else {
    const token = authHeader.split(" ")[1];
    //   console.log(token);

    try {
      const decodeToken = jwt.verify(token, JWT_SIGN);
      console.log(decodeToken, `This is decodeToken`);

      next();
    } catch (error) {
      res.status(400).json({
        Message: error.message,
      });
    }
  }
};

// Export authenticationMiddleware
module.exports = authenticationMiddleware;
