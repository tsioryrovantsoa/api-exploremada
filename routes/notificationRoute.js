const express = require('express');
const NotificationController = require('../controllers/notificationController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

const controller = new NotificationController();

router.get('/',controller.getAll);
router.get('/me',authMiddleware,controller.getMy);

module.exports = router;