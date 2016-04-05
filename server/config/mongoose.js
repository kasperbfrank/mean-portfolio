var mongoose = require('mongoose'),
    projectModel = require('../models/Project'),
    greetingModel = require('../models/Greeting');

module.exports = function(config) {
    mongoose.connect(config.db);

    var db = mongoose.connection;
    db.on('error', function(error) {
        console.log(error.message);
    });
    db.once('open', function(callback) {
        console.log('db opened...');
    });

    // bootstrap models
    projectModel.createDefaultProjects();
    // require('../models/Greeting');

}
