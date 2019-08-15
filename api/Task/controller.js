const {
	getTask,
	listTasks,
	addTask
} = require('./services')

exports.add = () => async (req, res, next) => {
	try {
		const newTask = await addTask(req.user.id, req.query)
		res.status(200).json(newTask)
	} catch (error) {
		next(error)
	}
}

exports.get = () => async (req, res, next) => {
	try {
		const task = await getTask(req.user.id, req.query)
		res.status(200).json(task);
	} catch (error) {
		next(error)
	}
}

exports.list = () => async (req, res, next) => {
	try {
		const tasks = await listTasks(req.user.id, req.query);
		res.status(200).json(tasks);
	} catch (error) {
		next(error)
	}
}