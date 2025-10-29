var http = require('http');
const { URL } = require('url');

//http://localhost:3000/barang?harga=100

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    const urlString = request.url || '';
    const urlObject = new URL(urlString, 'http://localhost');

    const query = urlObject.searchParams;

    // var txt = 'Kata kunci: ' + query + '<br>';
    var txt = 'Kata kunci: ' + query.get('harga') + '<br>';
    response.end(txt);
});

server.listen(3000);

console.log("server running on http://localhost:3000");