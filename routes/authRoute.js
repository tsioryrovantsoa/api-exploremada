const AuthController = require("../controllers/authController");
const express = require('express');
const router = express.Router();

const controller = new AuthController();

router.post('/',controller.signIn);

module.exports = router;