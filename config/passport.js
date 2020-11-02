const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
// const { Strategy: FacebookStrategy } = require('passport-facebook');
// const { facebook } = require('./env');
const User = require('../api/User/model');

/**
 * @note {passReqToCallback: true};
 */

passport.use('local-login', new LocalStrategy({
	usernameField: 'email',
}, async function(username, password, done) {
	try {
		console.log(username)
		const user = await User.findOne({ email: username }).exec()
		if (!user || await user.verifyPassword(password) === false) return done(null, false, { message: 'Incorrect username or password' })
		return done(null, user)
	} catch (error) {
		return done(error)
	}
}));

passport.use('local-register', new LocalStrategy({
	usernameField: 'email'
}, async function(username, password, done) {
	try {
		const user = await User.findOne({ email: username }).exec()
		if (user) return done(null, false, { message: 'User already exists' })
		const newUser = await new User({ email: username, password }).save()
		if (newUser) return done(null, newUser)
	} catch (error) {
		return done(error)
	}
}));

/**
 * @todo Facebook authentication
 */

// passport.use('facebook-login', new FacebookStrategy({
// 	clientID: facebook.appId,
// 	clientSecret: facebook.appSecret,
// 	callbackURL: 'http://example.com/facebook'
// }, async (accessToken, refreshToken, profile, done) => {
// }))

// passport.use('facebook-register', new FacebookStrategy({
// 	clientID: facebook.appId,
// 	clientSecret: facebook.appSecret,
// 	callbackURL: 'http://example.com/facebook'
// }, async (accessToken, refreshToken, profile, done) => {
// }))


passport.serializeUser(async (user, done) => {
	try {
		return done(null, user.id);
	} catch (error) {
		return error
	}
});

passport.deserializeUser(async (id, done) => {
	try {
		const user = await User.findById(id).exec();
		done(null, user)
	} catch (error) {
		done(err)
	}
});

module.exports = passport;