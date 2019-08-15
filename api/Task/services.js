const Task = require('./model');

exports.addTask = async (user_id, obj) => {
	try {
		return await new Task({ ...obj, user_id }).save();
	} catch (error) {
		return error
	}
}

exports.getTask = async (user_id, obj) => {
	try {
		return await Task.findOne({ ...obj, user_id }).exec();
	} catch (error) {
		return error
	}
}

exports.listTasks = async (user_id, obj) => {
	try {
		return await Task.find({ ...obj, user_id }).exec();
	} catch (error) {
		return error
	}
}