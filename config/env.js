require('dotenv').config();

module.exports = {
	port: process.env.PORT || 8000,
	secretKey: process.env.SECRET_KEY,
	facebook: {
		appId: process.env.FACEBOOK_APP_ID,
		appSecret: process.env.FACEBOOK_APP_SECRET
	},
	mongo: {
		uri: process.env.MONGODB_URI
	}
}