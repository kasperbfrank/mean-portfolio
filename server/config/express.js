var express = require('express'),
    path = require('path');

module.exports = function(app, config) {
    app.set('views', path.join(config.rootPath, 'server/views'));
    app.set('view engine', 'ejs');
    app.use(express.static(path.join(config.rootPath, 'public/app')));
}
