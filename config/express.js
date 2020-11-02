const express = require("express");
const session = require("express-session");
const { secretKey, env } = require("./env");
const passport = require("./passport");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const cors = require('cors');

const app = express();

/**
 * Parses incoming requests with urlencoded payloads
 */
app.use(express.urlencoded({ extended: true }));

/**
 * Parses incoming requests with JSON payloads
 */
app.use(express.json());

app.use(cors());

/**
 * Logger
 */
const accessLogStream = fs.createWriteStream(
	path.join(__dirname, "access.log"), { flags: "a" }
);
app.use(morgan("combined", { stream: accessLogStream }));

/**
 * Session configuration
 */
app.use(
	session({
		secret: secretKey,
		resave: true,
		saveUninitialized: true,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24, // 24 hours,
			secure: false
		},
		store: new MongoStore({ mongooseConnection: mongoose.connection })
	})
);

/**
 * Passport auth middleware init
 */
app.use(passport.initialize());
app.use(passport.session());


if (env !== "production") {
	app.use((req, res, next) => {
		console.log(req.body)
		console.log(req.query)
	})
}

/**
 * Test api status routes
 */
app.get("/status", (req, res) => res.status(200).end());
app.post("/status", (req, res) => res.status(200).end());

/**
 * Routes setup
 */
app.use("/api/users", require("../api/User/routes"));
app.use("/api/products", require("../api/Product/routes"));
app.use("/api/auth", require("../api/Auth/routes"));

module.exports = app;