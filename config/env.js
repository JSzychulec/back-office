require('dotenv').config();

module.exports = {
	env: process.env.NODE_ENV,
	port: process.env.PORT || 8000,
	secretKey: process.env.SECRET_KEY,
	facebook: {
		appId: process.env.FACEBOOK_APP_ID,
		appSecret: process.env.FACEBOOK_APP_SECRET
	},
	mongo: {
		uri: process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : process.env.NODE_ENV === 'test' ? process.env.MONGODB_TEST_URI : process.env.MONGODB_DEV_URI
	}
}