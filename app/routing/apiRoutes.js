module.exports = function (params) {

    var app = params[0];
    var connection = params[1];

    // GET request
    app.get('/api/people', function (req, res) {
        connection.query("SELECT * FROM people", function (err, result) {
            if (err) throw err;
            console.log('did a get request')
            res.json(result);
        });

    });

    // GET request (HERO only)
    app.get('/api/people/heros', function (req, res) {
        connection.query("SELECT * FROM people WHERE roll = 'hero'", function (err, result) {
            if (err) throw err;
            console.log('did a get request')
            res.json(result);
        });

    });

    // GET request (VILLIAN only)
    app.get('/api/people/villians', function (req, res) {
        connection.query("SELECT * FROM people WHERE roll = 'villian'", function (err, result) {
            if (err) throw err;
            console.log('did a get request')
            res.json(result);
        });

    });

    // POST Request
    // Required info format {person: {Person}, seeking: "villin" || "hero" }
    app.post('/api/people', function (req, res) {

        // // test data:
        // req.body['person'] = { userName: 'FreddyTest', picture: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1", ansKey: '5555555556', roll: 'villian' }
        // req.body['seeking'] = 'hero';


        // Update database with entire new row
        connection.query("INSERT INTO people (userName, picture, ansKey, roll) VALUES (?, ?, ?, ?)", [req.body.person.userName, req.body.person.picture, req.body.person.ansKey, req.body.person.roll], function (err, data) {
            if (err) { 
                console.log('Tripped at first db query')
                console.log(err)
                return res.status(500).end() };

            // After adding to db, find closest match and return it
            connection.query("SELECT * FROM people WHERE roll = ?", [req.body.seeking], function (err, result) {
                if (err) { 
                    console.log('Tripped at 2nd db query')
                    return res.status(500).end() }

                let parsedResult = result;
                let me = req.body.person;

                let bestMatch = { id: undefined, difference: 9999 }

                for (let i = 0; i < parsedResult.length; i++) {
                    let other = parsedResult[i];

                    // Prevent matching with self
                    if (other.userName === me.userName) { continue };

                    let loopMatch = 0;
                    for (let j = 0; j < me.length; j++) {
                        let loopMe = parseInt(me.ansKey[j]);
                        let loopOther = parseInt(other.ansKey[j]);

                        if (loopMe === 0) {loopMe = 10};
                        if (loopOther === 0) {loopOther = 10};

                        loopMatch += Math.abs( loopMe - loopOther );
                    }

                    if (bestMatch.difference > loopMatch) {
                        bestMatch = { id: i, difference: loopMatch };
                    }

                }

                return res.json(parsedResult[bestMatch.id]);

            });

        })

    });

}