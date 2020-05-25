var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function (request, response) {
    console.log('server is started');
    response.send('<h1>Lesson-19</h1>')
});

server.get('/userGet', function (request, response) {
    console.log(request.query);
    response.send(JSON.stringify(request.query));
});

server.post('/userPost', function (request, response) {
    console.log(request.body);
    response.send('You have succesfully used POST');
});
server.listen(3000);