const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

const Post = require('../models/PostModel');
const User = require('../models/UserModel');
const upload = require('../middleware/upload');

let gfs;
mongoose.connection.once('open', function () {
	gfs = Grid(mongoose.connection.db, mongoose.mongo);
	gfs.collection('photos');
});

const getPosts = async (req, res) => {
	try {
		const posts = await Post.find();
		res.status(200).send(posts);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const getPost = async (req, res) => {
	try {
		const { id } = req.params;
		const post = await Post.findById(id);
		res.status(200).send(post);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const getImage = async (req, res) => {
	try {
		const file = await gfs.files.findOne({
			_id: new mongoose.mongo.ObjectId(req.params.id),
		});
		const readStream = gfs.createReadStream(file.filename);
		res.set({
			'content-type': 'binary/octet-stream',
			'content-disposition': 'inline',
		});
		readStream.pipe(res);
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
		const post = await Post.create(req.body);
		res.send(post);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

const deletePost = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		await gfs.files.deleteOne({
			_id: new mongoose.mongo.ObjectId(post.img),
		});
		await Post.findByIdAndRemove(req.params.id);
		res.status(200).json({ message: 'Removed' });
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

const likePost = async (req, res) => {
	try {
		const { id } = req.params;
		const { userId } = req.query;

		const post = await Post.findById(id);
		const updatedPostLikes = post.likes + 1;
		const updatedPost = await Post.findOneAndUpdate(
			{ _id: id },
			{ likes: updatedPostLikes },
			{ new: true }
		);

		const user = await User.findById(userId);
		user.likes.push(id);
		const updatedLikes = [...new Set(user.likes)];
		const updatedUser = await User.findOneAndUpdate(
			{ _id: userId },
			{ likes: updatedLikes },
			{ new: true }
		);

		res.status(200).send({ post: updatedPost, user: updatedUser });
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

const unlikePost = async (req, res) => {
	try {
		const { id } = req.params;
		const { userId } = req.query;

		const post = await Post.findById(id);
		const updatedPostLikes = post.likes - 1;
		const updatedPost = await Post.findOneAndUpdate(
			{ _id: id },
			{ likes: updatedPostLikes },
			{ new: true }
		);

		const user = await User.findById(userId);
		const updatedLikes = user.likes.filter((e) => e !== id);
		const updatedUser = await User.findOneAndUpdate(
			{ _id: userId },
			{ likes: updatedLikes },
			{ new: true }
		);

		res.status(200).send({ post: updatedPost, user: updatedUser });
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

const editPost = async (req, res) => {
	try {
		const { id } = req.params;
		const { title, caption } = req.query;
		const updatedPost = await Post.findOneAndUpdate(
			{ _id: id },
			{ title: title, caption: caption },
			{ new: true }
		);
		res.status(200).send(updatedPost);
	} catch (err) {
		console.log(err);
		res.status(404).json({ message: err.message });
	}
};

module.exports = {
	getPosts,
	getPost,
	addImage,
	addPost,
	getImage,
	deletePost,
	likePost,
	unlikePost,
	editPost,
};
