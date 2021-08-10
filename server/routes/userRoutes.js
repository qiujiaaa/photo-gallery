const express = require('express');

const router = express.Router();
const { getDp } = require('../controllers/userController');

router.get('/displaypic/:id', getDp);

module.exports = router;
