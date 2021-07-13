const Post = require('../models/PostModel');

const getPosts = async (req, res) => {
	try {
		const posts = await Post.find();
		res.send(posts);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

const addPost = async (req, res) => {
	if (req.file) {
		res.send(req.file.id);
	} else {
		res.status(404).send('File error.');
	}
};

module.exports = { getPosts, addPost };
