const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

// load config
dotenv.config({ path: './config/config.env' });

const { connectDB } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

// initialise server
const app = express();

// morgan for logging
app.use(morgan('dev'));

// cors to fix cross origin error
app.use(cors());

// connect to db
connectDB();

// middleware parse JSON bodies | parse URL-encoded bodies
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Logging
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`
	)
);
