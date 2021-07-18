const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

const Post = require('../models/PostModel');
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

module.exports = { getPosts, addImage, addPost, getImage };
