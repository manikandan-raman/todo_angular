const router = require('express').Router();

const user_controller = require('../controllers/user-controller');

router.get('/test',user_controller.test);

module.exports = router;