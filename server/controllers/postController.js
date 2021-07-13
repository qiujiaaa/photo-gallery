const Post = require('../models/PostModel');

const getPosts = async (req, res) => {
	try {
		const posts = await Post.find();
		res.send('POSTS!');
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

module.exports = { getPosts };
