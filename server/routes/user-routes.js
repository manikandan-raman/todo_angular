const router = require('express').Router();

const user_controller = require('../controllers/user-controller');

router.get('/test',user_controller.test);

router.post('/signup',user_controller.signup);

router.get('/:id',user_controller.user);

router.put('/update/:id',user_controller.update);

router.delete('delete/:id',user_controller.delete);

module.exports = router;