const Post = require('../models/PostModel');

const redirectDashboard = (req, res) => {
	res.redirect(301, '/dashboard');
};

module.exports = { redirectDashboard };
