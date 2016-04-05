var Project = require('mongoose').model('Project');

exports.getAll = function(req, res) {
    Project.find({}).exec(function(error, collection) {
        console.log(collection);
        res.send(collection);
    })
};

exports.getByName = function(req, res) {
    Project.findOne({name: req.params.name}).exec(function(error, project) {
        console.log(project);
        res.send(project);
    });
};
