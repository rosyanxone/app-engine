const http = require('http');

function requestListener(request, response) {
    response.setHeader('Content-Type', 'text/html');
    // response.setHeader('Content-Type', 'application/json');

    if(request.method !== 'GET') {
        response.statusCode = 405;
        response.end('<h1>Method not allowed!</h1>');
        // response.end(JSON.stringify({
        //     status: 'fail',
        //     message: 'method not allowed',
        //     data: ,
        // }))
        return;
    }

    if(request.url === '/') {
        response.statusCode = 200;
        response.end('<h1>Halaman utama</h1>');
        return;
    }

    if(request.url === '/article') {
        response.statusCode = 200;
        response.end('<h1>Halaman artikel</h1>');
        return;
    }

    // response.setHeader('Content-Type', 'text/html');
    response.end('<h1>404! alamat tidak ditemukan</h1>');
}

process.env.NODE_ENV = '0.0.0.0';

// membuat sebuah HTTP server
const server = http.createServer(requestListener);

// menjalankan server
const port = 9000;
server.listen(port, () => {
    console.log(`Server berjalan pada http://localhost:${port}`);
});