const axios = require('axios');

const User = require('../models/UserModel');

const getDp = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id);
		const response = await axios.get(user.image, {
			responseType: 'stream',
		});
		res.status(200).send(response);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = { getDp };
