module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../index.html'));
    });

    // API Routes really only work as 
    app.get('/people', function (req, res) {
        // stuff
    });

}