const User = require("../User/model");

exports.login = async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id).lean();
		delete user.password
		console.log(user)
		return res.status(200).json({ data: user })
	} catch (error) {
		next(error)
	}
}

exports.register = async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id).lean();
		delete user.password
		return res.status(200).json({ data: user })
	} catch (error) {
		next(error)
	}
}

exports.status = async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id).lean();
		delete user.password
		return res.status(200).json({ data: user })
	} catch (error) {
		next(error)
	}
}

exports.logout = async (req, res, next) => {
	try {
		await req.logout()
		return res.status(200).end()
	} catch (error) {
		next(error)
	}
}