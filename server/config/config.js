var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/meanseed', // switch this out for db....
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://kasperbfrank:meantest@ds013619.mlab.com:13619/meantest', // switch this out for remote db....
        port: process.env.PORT || 80
    }
}
