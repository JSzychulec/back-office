const express = require('express')
const cors = require('cors');
const session = require('express-session');
const { secretKey } = require('./env');
const passport = require('./passport')


const app = express();

/**
 * Enables CORS requests
 */
// app.use(cors())


/**
 * Parses incoming requests with urlencoded payloads
 */
app.use(express.urlencoded({ extended: true }));

/**
 * Parses incoming requests with JSON payloads
 */
app.use(express.json());

/**
 * Session configuration
 */
app.use(session({
	secret: secretKey,
	resave: true,
	saveUninitialized: true,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24, // 24 hours,
		secure: false,
	}
}));

/**
 * Passport auth middleware init
 */
app.use(passport.initialize());
app.use(passport.session());

/**
 * Test api status routes
 */
app.get('/status', (req, res) => res.status(200).end())
app.post('/status', (req, res) => res.status(200).end())

/**
 * Routes setup
 */
app.use('/api/user', require('../api/User/routes'));
app.use('/api/task', require('../api/Task/routes'));
app.use('/api/auth', require('../api/Auth/routes'));

module.exports = app;