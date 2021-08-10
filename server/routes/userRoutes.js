const express = require('express');

const router = express.Router();
const { getDp, getUser } = require('../controllers/userController');

router.get('/displaypic/:id', getDp);
router.get('/:id', getUser);

module.exports = router;
