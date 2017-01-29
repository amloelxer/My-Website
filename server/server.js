// server.js

//get the express package
var express    = require('express');
//create an instance of the app from express
var app        = express();
//Used for parsing JSON
var bodyParser = require('body-parser');

var path = require("path");
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();

// This is where you specify where all the static files should go
app.use(express.static('/home/bitnami/htdocs'));

router.get('/test', function(req, res) {
	res.json({ message: 'Hooray! The test API works' });
    });

router.post('/mail', function(req, res) {
        res.json({ message: 'hooray! You hit my post' });
    });


//THIS HAS TO BE THE LAST ROUTE TO NOT FUCK SHIT UP
router.get('*', function(req,res) {
	res.send('Brah 404 is a no go', 404);
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================
app.listen(port);
console.log('Magic happens on port ' + port);
