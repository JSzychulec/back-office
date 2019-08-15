const User = require('./model');

exports.get = async (obj = {}) => {
	try {
		return await User.findOne(obj).exec();
	} catch (error) {
		return error;
	}
}

exports.list = async (obj = {}) => {
	try {
		return await User.find(obj).exec();
	} catch (error) {
		return error;
	}
}

exports.update = async (user_id, obj = {}) => {
	try {
		// @todo testing + recreate needed
		if (obj._id || obj.password) throw 'Tried to change userID or password'
		let user = await User.findByIdAndUpdate(user_id, obj).exec();
		user.password = '';
		return user
	} catch (error) {
		return error
	}
}