const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new Error("No token provided");
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      throw new Error("Invalid token");
    }

    req.userId = decoded.userId;
    next();
  });
};

module.exports = authMiddleware;
