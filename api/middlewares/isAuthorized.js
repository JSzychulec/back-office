const ApiError = require('../utils/ApiError');

module.exports = (role = 'user') => (req, res, next) => {
	if (req.user && (req.user.role === role || req.user.role === 'admin')) next();
	else next(new ApiError({
		message: 'Unauthorized access',
		status: 401,
		redirectUrl: '/login'
	}))
}