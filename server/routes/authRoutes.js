const express = require('express');

const router = express.Router();
const { redirectDashboard } = require('../controllers/authController');

router.get('/', redirectDashboard);

module.exports = router;
