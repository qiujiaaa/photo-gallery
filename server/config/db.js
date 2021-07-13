const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		});
		console.log(`Connected to MongoDB: ${conn.connection.host}`);

		let gfs;
		mongoose.connection.once('open', function () {
			gfs = Grid(mongoose.connection.db, mongoose.mongo);
			gfs.collection('photos');
		});
	} catch (err) {
		console.log('Unable to connect to database.');
	}
};

module.exports = connectDB;
