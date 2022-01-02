var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Chetan Kochiyaniya');
    res.write('<br>Server is created at port 3000');
    res.end();
}).listen(3000);