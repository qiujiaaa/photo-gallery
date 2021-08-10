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
	name: {
		type: String,
		require: true,
	},
	userId: {
		type: mongoose.ObjectId,
		require: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = new mongoose.model('Post', postSchema);
