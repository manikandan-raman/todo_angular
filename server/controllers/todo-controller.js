const Todo = require('../models/todo-model');

exports.test = ((req, res) => {
    res.send('Greetings from the todo controller');
})

exports.addtodo = ((req, res) => {
    let todo = new Todo({
        list_usrmst_id: req.body.object,
        list_name: req.body.list_name,
        list_datetime: req.body.list_datetime,
        list_list_id: req.body.list_list_id,
        list_status: req.body.list_status,
        list_priority: req.body.list_priority,
    });

    todo.save((err) => {
        if(err) throw err;
        res.json({
            msg: "Todo created successfully",
            status: 1
        });
    })
});

exports.todo = ((req, res) => {
    Todo.findById(req.params.id, (err, Todo) => {
        if(err) throw err;
        res.send(Todo);
    })
});

exports.todos = ((req, res) => {
    Todo.find({}).then(todo =>{
        res.json(todo);
    })
});

exports.update = ((req, res) => {
    Todo.findByIdAndUpdate(req.params.id,{$set: req.body},(err) => {
        if(err) throw err;
        res.json({
            msg: "Todo Updated Successfully",
            status: 1
        })
    })
});

exports.delete = ((req, res) => {
    Todo.findByIdAndDelete(req.params.id,(err) => {
        if(err) throw err;
        res.json({
            msg: "Todo Deleted Successfully",
            status: 1
        })
    })
});