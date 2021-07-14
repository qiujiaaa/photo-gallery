const Post = require('../models/PostModel');
const upload = require('../middleware/upload');

const getPosts = async (req, res) => {
	try {
		const posts = await Post.find();
		res.send(posts);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

const addImage = async (req, res) => {
	try {
		await upload(req, res);
		if (req.file == undefined) {
			return res.status(500).json({ message: 'File error' });
		}
		res.send(req.file.id);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

const addPost = async (req, res) => {
	try {
		console.log(req.body);
		await Post.create(req.body);
		res.send('Post added');
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

module.exports = { getPosts, addImage, addPost };
