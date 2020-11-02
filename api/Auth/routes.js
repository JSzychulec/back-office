const router = require('express').Router();
const passport = require('../../config/passport');
const { login, register, status, logout } = require('./controller')
const isAuthorized = require('../middlewares/isAuthorized');

router.post('/login', passport.authenticate('local-login'), login)

router.post('/register', passport.authenticate('local-register'), passport.authenticate('local-login'), register)

router.get('/status', isAuthorized(), status)

router.post('/logout', isAuthorized(), logout)

module.exports = router;