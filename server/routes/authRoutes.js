const express = require('express');
const passport = require('passport');
const router = express.Router();

const { generateToken, sendToken } = require('../utils/token');
const { checkAuth, logout } = require('../controllers/authController');

router.post(
	'/google',
	passport.authenticate('google-token', { session: false }),
	function (req, res, next) {
		if (!req.user) {
			return res.status(404).json({ message: 'User Not Authenticated' });
		}
		req.auth = {
			id: req.user.id,
		};

		next();
	},
	generateToken,
	sendToken
);

router.get('/check', checkAuth);
router.get('/logout', logout);

module.exports = router;
