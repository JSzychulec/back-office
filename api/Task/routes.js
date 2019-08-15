const router = require('express').Router();
const { add, get, list } = require('./controller');
const isAuthorized = require('../middlewares/isAuthorized');

router.use(isAuthorized());

router.post('/add', add());

router.get('/get', get());

router.get('/list', list());

module.exports = router