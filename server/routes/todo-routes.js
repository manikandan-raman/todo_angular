const router = require('express').Router();

const todo_controller = require('../controllers/todo-controller');

router.get('/test',todo_controller.test);

router.post('/addtodo',todo_controller.addtodo);

router.get('/:id',todo_controller.todo);

router.get('/todos',todo_controller.todos);

router.put('/update/:id',todo_controller.update);

router.delete('/delete/:id', todo_controller.delete);

module.exports = router;