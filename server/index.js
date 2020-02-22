const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 1234;
const mongodbUrl = "mongodb://localhost:27017/todo";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,HEAD,OPTIONS");
    res.header("Access-Control-Allow-Headers","*");
    next();
});

const userRoutes = require('./routes/user-routes');
const todoRoutes = require('./routes/todo-routes');
app.use('/user',userRoutes);
app.use('/todo',todoRoutes);

mongoose.connect(mongodbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('Mongodb is up and running'));

let msg = (mongoose.connection) ? 'Mongo DB Connected' : 'Error Connecting DB';
console.log(msg);

app.listen(port,() => console.log('Express server is up and running'));