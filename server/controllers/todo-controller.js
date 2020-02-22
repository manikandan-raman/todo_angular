const Todo = require('../models/todo-model');

exports.test = ((req, res) => {
    res.send('Greetings from the todo controller');
})