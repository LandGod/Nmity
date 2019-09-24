var path = require('path')

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get('/index.html', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    // API Routes really only work as 
    app.get('/people', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'))
    });

    app.get('app/public/formSubmit.js', function (req, res) {
        console.log('Hit route for js file  ')
        res.sendFile(path.join(__dirname, '../public/public/formSubmit.js')) 
    });

}