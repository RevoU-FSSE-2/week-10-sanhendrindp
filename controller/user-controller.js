const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SIGN } = require("../config/jwt.js");

// Register user account for new user
const register = async (req, res) => {
  const { username, password, role } = req.body;

  // Connect to database
  try {
    const user = await req.db.collection("users").findOne({ username });

    // If there is already the same user, throw error. If not, create new user.
    if (user) {
      throw new Error("Username already exist!");
    }

    // Create hash password
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await req.db
      .collection("users")
      .insertOne({ username, password: hashPassword, role });
    res.status(201).json({
      Message: "User successfully registered! ✅",
      Data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      Message: error.message,
    });
  }
};

// Login if already have user account
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await req.db.collection("users").findOne({ username });

    // Check if a user with the given username exists
    if (!user) {
      return res.status(400).json({
        Message: "User not found!",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    // Check if password is correct or not
    if (isPasswordCorrect) {
      const token = jwt.sign(
        { id: user._id, username: user.username, role: user.role },
        JWT_SIGN
      );
      res.status(200).json({
        Message: "User successfully logged in ✅",
        Data: token,
      });
    } else {
      res.status(400).json({
        Message: "Password is incorrect!",
      });
    }
  } catch (error) {
    res.status(500).json({
      Message: error.message,
    });
  }
};

// Export
module.exports = { register, login };
