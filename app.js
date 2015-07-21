var fs = require('fs');


var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	var fileContents = fs.readFileSync('./public/data.txt');
		res.header('Content-Type', 'text/html'); 
		res.send(fileContents);
	
});

//line 11 is a route.  A slash / is our home route. the function above is our handler that tells express what to do when the route is hit.  Inside your function put all the logic for what should happen when someone goes to that route.  ex.  we want to read a file and then send
//it inside of our handler.
// 
// the header is additional info about what is being passed around.
// nothing gets send until you use render or send

var server = app.listen(8450, function() {
	console.log('Express server listening on port ' + server.address().port);
});

  //this says get data.txt out of the public folder


// line 6 says we will be serving static files from the public directory


//An http request technically has 2 parts, the request from the client(which is the browser)
// and the response from the server

// 3 methods for ending a request are:
// redirect, send, and render (renders a view file)

Restart your node server and refresh your browser. You should now see the contents of your text file written out to the page!
Actually go to command line, do command + c to kill the directory.  then type in "nodemon app.js".  You will get a response like "Listening in port 5678",  open browser and enter "localhost:5678"