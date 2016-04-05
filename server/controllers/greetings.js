var Greeting = require('mongoose').model('Greeting');

exports.getAll = function(req, res) {
    Greeting.find({}).exec(function(error, collection) {
        console.log(collection);
        res.send(collection);
    });
}

exports.getById = function(req, res) {
    Greeting.findOne({_id:req.params.id}).exec(function(error, greeting) {
        console.log(greeting);
        res.send(greeting);
    });
}
