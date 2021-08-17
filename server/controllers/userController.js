const User = require('../models/UserModel');

const getUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id);
		res.status(200).send(user);
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ message: err.message });
	}
};

module.exports = { getUser };
