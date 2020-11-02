module.exports = async (req, res, next) => {
	console.log('----query----')
	console.log(req.query)
	console.log('----body-----')
	console.log(req.body)
	next()
};