const express = require('express');
const passport = require('passport');
const router = express.Router();
//const { redirectDashboard } = require('../controllers/authController');

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
	'/google/callback',
	passport.authenticate('google', { failureRedirect: '/' }),
	(req, res) => {
		// Successful authentication, redirect to dashboard.
		res.redirect('http://localhost:3000/dashboard');
	}
);

router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

module.exports = router;
