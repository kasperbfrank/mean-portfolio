var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/portfoliodb', // switch this out for db....
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://<username>:<password>@ds013619.mlab.com:13619/<dbname>', // switch this out for remote db....
        port: process.env.PORT || 80
    }
}
