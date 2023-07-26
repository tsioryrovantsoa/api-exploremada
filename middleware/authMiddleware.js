const jwt = require('jsonwebtoken');
const AuthService = require('../services/authService');

const authMiddleware = (req, res, next) => {

  const authservice = new AuthService();
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({statue : "ko",  message: 'No token provided' });
  }

  const [bearer, token] = authorizationHeader.split(' ');

  if (bearer !== 'Bearer' || !token) {
    return res.status(401).json({statue : "ko",  message: 'Invalid token format' });
  }

  if (authservice.isTokenBlacklisted(token)) {
    return res.status(401).json({statue : "ko",  message: 'Token blacklisted' });
  }

  jwt.verify(token, 'exploremada', (err, decoded) => {
    if (err) {
      return res.status(401).send({statue : "ko", message: "Invalid token"});
    }

    req.userId = decoded.userId;
    req.userToken = token;
    next();
  });
};

module.exports = authMiddleware;
