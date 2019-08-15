const router = require('express').Router();
const passport = require('../../config/passport');
const upload = require('multer')();


router.post('/login', upload.none(), passport.authenticate('local-login'), (req, res, next) => {
	res.json({
		id: req.user.id,
		role: req.user.role,
		email: req.user.email,
		loggedIn: true
	})
});

router.post('/register', upload.none(), passport.authenticate('local-register'), (req, res, next) => {
	res.json({
		id: req.user.id,
		role: req.user.role,
		email: req.user.email,
		loggedIn: true
	})
})

router.get('/', upload.none(), (req, res, next) => {
	if (req.user) res.status(200).json({
		id: req.user.id,
		role: req.user.role,
		email: req.user.email,
		loggedIn: true
	})
	else next(new ApiError({
		message: 'Unathorized access',
		status: 401,
	}))
})

router.post('/logout', async (req, res, next) => {
	try {
		req.logout()
		res.status(200).json({
			loggedIn: false,
		});
	} catch (error) {
		next(error)
	}
})


module.exports = router;