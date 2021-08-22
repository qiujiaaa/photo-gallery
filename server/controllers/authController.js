const { verifyToken } = require('../utils/token');
const User = require('../models/UserModel');

const checkAuth = async (req, res) => {
	try {
		if (req.cookies.jwt_token) {
			const userId = verifyToken(req.cookies.jwt_token);
			if (userId) {
				const user = await User.findById(userId);
				res.status(200).send(user);
			} else {
				res.status(404).json({ message: 'Invalid token.' });
			}
		} else {
			res.status(404).json({ message: 'No token in request.' });
		}
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

module.exports = { checkAuth };
