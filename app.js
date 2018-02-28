const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const redis = require("redis");

// We need RedisServer to run the server with the application at the same time
// const RedisServer = require('redis-server');
 
// // Simply pass the port that you want a Redis server to listen on.
// const server = new RedisServer(6379);
 
// server.open((err) => {
//   if (err === null) {
//     // You may now connect a client to the Redis
//     // server bound to port 6379.
    
//   }
// });

// // Now create the redis client
// let client = redis.createClient();

// client.on('connect', function(){
//     console.log('Redis connected!');
// });

// client.on("error", function (err) {
//     console.log("Redis Error " + err);
// });







// App
const app = express();

// var log = function(entry) {
//     fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
// };

const publicPath = path.join(__dirname, '/public');
app.use('/', express.static(publicPath));

app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', '.jsx');

// app.enable('view cache');

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Routes
require('./routes')(app);

var port = process.env.PORT || 3000;
app.listen(port, () => console.log('Example app listening on port ' + port ));







////Original////
/*var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var body = '';

        req.on('data', function(chunk) {
            body += chunk;
        });

        req.on('end', function() {
            if (req.url === '/') {
                log('Received message: ' + body);
            } else if (req.url = '/scheduled') {
                log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at']);
            }

            res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
            res.end();
        });
    } else {
        res.writeHead(200);
        res.write(html);
        res.end();
    }
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
*/