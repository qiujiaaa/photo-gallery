const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const indexRoutes = require('./routes/indexRouter');
const userRoutes = require('./routes/userRoutes');

// load config
dotenv.config({ path: './config/config.env' });

// initialise server
const app = express();

// morgan for logging
app.use(morgan('dev'));

// connect to db
connectDB();

// middleware parse JSON bodies | parse URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// routes
app.use('/api', indexRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`
	)
);
