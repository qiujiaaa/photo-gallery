const Post = require('../models/PostModel');

const checkAuth = (req, res) => {
	try {
		console.log(req.cookies);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

module.exports = { checkAuth };
