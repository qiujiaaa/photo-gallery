const axios = require('axios');

const User = require('../models/UserModel');

const getUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id);
		res.status(200).send(user);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = { getUser };
