const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');

// load config
dotenv.config({ path: './config/config.env' });

const { connectDB } = require('./database/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

// Passport config
require('./config/passport')(passport);

// connect to db
connectDB();

// initialise server
const app = express();

// morgan for logging
app.use(morgan('dev'));

// cors to fix cross origin error
app.use(cors());

// middleware parse JSON bodies | parse URL-encoded bodies
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// sessions
app.use(
	session({
		secret: 'keyboardcat',
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
	})
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Logging
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// routes
app.use('/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`
	)
);
