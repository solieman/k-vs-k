const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
const fs = require('fs');


const app = express();

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

const publicPath = path.join(__dirname, '/public');
app.use('/', express.static(publicPath));

const hbs = exphbs.create({
    extname: '.hbs',
    // Specify helpers which are only registered on this instance. 
    helpers: {
        foo: function () { return 'FOO!'; },
        bar: function () { return 'BAR!'; }
    }
});

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.enable('view cache');

app.get('/', function (req, res, next) {
    res.render('home', {
        showTitle: true,
 
        // Override `foo` helper only for this rendering. 
        helpers: {
            foo: function () { return 'foo.'; }
        }
    });
});



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