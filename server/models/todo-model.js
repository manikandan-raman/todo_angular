var mongoose = require('mongoose');
var todoSchema = mongoose.Schema({
    list_usrmst_id: { type: Number, require: true },
    list_name: {type: String, require: true },
    list_datetime: {type: Date, require: true },
    list_list_id: {type: String, require: true },
    list_status: {type: Number, require: true },
    list_priority: {type:Number, require: true},
    list_createon: {type:Date, require: true }
});

module.exports = mongoose.model('Todo',todoSchema);