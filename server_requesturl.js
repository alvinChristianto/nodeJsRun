var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    switch (request.url) {
        case '/about':
            response.write("Ini adalah halaman about");
            break;
        case '/profile':
            response.write("Ini adalah halaman profile");
            break;
        case '/produk':
            response.write("ini adalah halaman produk");
            break;
        default:
            response.write("404: Halaman tidak ditemukan");
    }
    response.end();
});

server.listen(3000);

console.log("server running on http://localhost:3000");