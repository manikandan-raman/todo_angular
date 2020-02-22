const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user_name: { type: String, require: true },
    user_email: { type: String, require: true },
    user_phone: { type: Number, require: true },
    user_password: { type: String, require: true },
    user_createdon: { type: Date, require: true }
});

mongoose.model('User', userSchema);