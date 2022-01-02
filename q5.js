var http = require('http');

http.createServer(function (req, res) {

    if(req.url=='/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<b>default Page<b>');
        res.end();
    }
    else if(req.url=='/Student'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<b>Student Page<b>');
        res.end();
    }
    else if(req.url=='/Admin'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<b>Admin Page<b>');
        res.end();
    }
   
}).listen(5050);
