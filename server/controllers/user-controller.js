const User = require('../models/user-model');

exports.test = ((req,res) => {
    res.send('Greetings from the User Controller');
});

