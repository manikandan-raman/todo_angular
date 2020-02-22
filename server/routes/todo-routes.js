const router = require('express').Router();

const todo_controller = require('../controllers/todo-controller');

router.get('/test',todo_controller.test);

module.exports = router;