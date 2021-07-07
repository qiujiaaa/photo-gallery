const express = require('express');

const router = express.Router();
const { getMyProfile } = require('../controllers/userController');

router.get('/', getMyProfile);

module.exports = router;
