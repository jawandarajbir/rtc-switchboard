var http = require('http');
var port = process.env.port || 1337;
var host = process.env.NODE_HOST || process.env.HOST || 'localhost';
var replify = require('replify');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('rtc switchboard is running on'
        + ' \n port:' + port
        + ' \n host:' + host);
}).listen(port);
var switchboard = require('./')(server, { servelib: true });
