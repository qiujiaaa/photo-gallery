const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		});
		console.log(`Connected to MongoDB: ${conn.connection.host}`);
	} catch (err) {
		console.log('Unable to connect to database.');
	}
};

module.exports = { connectDB };
