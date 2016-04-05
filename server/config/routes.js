var projects = require('../controllers/projects');

module.exports = function(app) {

    app.get('/api/projects', projects.getAll);
    app.get('/api/projects/:name', projects.getByName);

    app.all('/api/*', function(req, res) {
        res.send(404);
    });

    app.get('*', function(req, res) {
        res.render('index');
    });
}
