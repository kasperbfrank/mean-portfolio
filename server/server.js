var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./config/config')[env];

require('./config/express')(app, config);
require('./config/mongoose')(config);
require('./config/routes')(app);

app.listen(config.port, function(error) {
    console.log('Running server on ' + config.port + '...');
});
