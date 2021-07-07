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
		data: Buffer,
		contentType: String,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = new mongoose.model('Post', postSchema);
