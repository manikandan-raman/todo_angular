const User = require('../models/user-model');

exports.test = ((req,res) => {
    res.send('Greetings from the User Controller');
});

exports.signup = ((req, res) => {
    
    let user = new User({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_phone: req.body.user_phone,
        user_password: req.body.user_password,
        user_createdon: new Date()
    });

    user.save((err) => {
        if(err) throw err;
        res.json({
            msg: "User created successfully",
            status:1
        });
    })
});

exports.login = ((req, res) => {
    console.log(req.body);
    User.find(
        { 
            user_phone: req.body.username, 
            user_password : req.body.password 
        }
    ).then((user) => {
        res.json(user);
    }).catch(err => {
        res.status(500).json(err)
      })
});

exports.user = ((req, res) => {
    User.findById(req.params.id, (err, User) => {
        if(err) throw err;
        res.send(User);
    });
});

exports.update = ((req, res) => {
    User.findByIdAndUpdate(req.params.id,{$set: req.body}, (err) => {
        if(err) throw err;
        res.json({
            msg: "User Details Updated Successfully",
            status: 1
        });
    });
});

exports.delete = ((req, res) => {
    User.findByIdAndDelete(req.params.id, (err) => {
        if(err) throw err;
        res.json({
            msg: "User Deleted Successfully",
            status: 1
        })
    })
});
