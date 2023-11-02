const http = require('http');
const getUser = require('./modules/users')

const server = http.createServer((request, response) => {
    const { url } = request;
    
    if (url.startsWith('/?hello=')) {
        const name = url.split('=')[1];
        if (name) {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(`Hello, ${name}.`);
        } else {
            response.statusCode = 400;
            response.setHeader('Content-Type', 'text/plain');
            response.end('Enter a name');
        }
    } else if (url === '/?users') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.end(getUser());
    } else if (url === '/') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end('Hello, World!');
    } else {
        response.statusCode = 500;
        response.setHeader('Content-Type', 'application/json');
        response.end("{}");
    }
});

const hostname = '127.0.0.1';
const port = 3003;

server.listen(port, hostname, () => {
    console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
});
