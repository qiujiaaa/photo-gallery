const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		require: true,
		trim: true,
	},
	caption: {
		type: String,
		trim: true,
	},
	img: {
		type: mongoose.Schema.ObjectId,
	},
	likes: {
		type: Number,
		require: true,
	},
	author: {
		type: String,
		require: true,
	},
	authorId: {
		type: mongoose.ObjectId,
		require: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = new mongoose.model('Post', postSchema);
