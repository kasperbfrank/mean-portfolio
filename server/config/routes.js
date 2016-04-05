var greetings = require('../controllers/greetings');

module.exports = function(app) {

    app.get('/api/greetings', greetings.getAll);
    app.get('/api/greetings/:id', greetings.getById);

    app.all('/api/*', function(req, res) {
        res.send(404);
    });

    app.get('*', function(req, res) {
        res.render('index');
    });
}
