const AuthController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const express = require('express');
const router = express.Router();

const controller = new AuthController();

router.post('/login',controller.signIn);
router.get('/me',authMiddleware, controller.getMe);
router.post('/logout',authMiddleware,controller.signOut);

module.exports = router;