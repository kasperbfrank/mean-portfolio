var mongoose = require('mongoose');

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
    require('../models/Greeting');
}
