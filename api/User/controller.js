const { get, list, update } = require('./services');

exports.profile = () => async (req, res, next) => {
	try {
		const user = await get({ _id: req.query.id });
		res.status(200).json({ ...user, password: "" })
	} catch (error) {
		next(error)
	}
}

exports.update = () => async (req, res, next) => {
	try {
		const user = await update(req.user.id, req.query);
		res.status(200).json(user);
	} catch (error) {
		next(error)
	}
}

// exports.remove = () => async (req, res, next) => {
// 	try {
// 		await User.deleteOne({ _id: req.user.id })
// 		res.status(200).json({ message: `User with id ${req.user.id} removed` });
// 	} catch (error) {
// 		next(error)
// 	}
// }