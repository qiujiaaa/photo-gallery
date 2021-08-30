const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');
const path = require('path');

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

app.set('trust proxy', 1);

// morgan for logging
app.use(morgan('dev'));

// cookies

app.use(cookieParser());

// cors to fix cross origin error
var corsOption = {
	origin: true,
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true,
	exposedHeaders: ['x-auth-token'],
};
app.use(cors(corsOption));

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
		cookie: {
			sameSite: 'none',
			secure: true,
		},
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

app.get('/', (req, res) => {
	res.send('Hello to Capture API');
});

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`
	)
);
