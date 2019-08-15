const MongooseValidationError = require('mongoose').Error.ValidationError
const ApiError = require('../utils/ApiError')

module.exports = async function(error, req, res, next) {
	if (error instanceof MongooseValidationError) {
		// @todo Handle Mongoose errors
		next(error)
	} else if (error instanceof ApiError) {
		res.setHeader('Content-Type', 'application/json')
		res.status(error.status).json(error)
	} else {
		next(error)
	}
}