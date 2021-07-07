const express = require('express');

const router = express.Router();
const {
	getPosts,
	redirectDashboard,
} = require('../controllers/indexController');

router.get('/', redirectDashboard);
router.get('/dashboard', getPosts);

module.exports = router;
