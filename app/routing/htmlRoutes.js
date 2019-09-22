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

}