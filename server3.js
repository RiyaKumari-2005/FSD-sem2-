const http = require('http');
const url = require('url');
const PORT = 3000;
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;
    console.log(`Request received: ${req.method} ${path}`);
    if (path === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('X-Powered-By', 'plain-node-http');
        res.end('Welcome! Try /greet?name=Rahul or /headers or POST to /data');
    } else if (path === '/greet' && req.method === 'GET') {
        const name = query.name || 'Guest';
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Hello, ${name}! Welcome to the server.`);
    } else if (path === '/headers' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(req.headers,null,2));
    }
    else if (path === '/data' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {body += chunk;});
        req.on('end', () => {
            res.statusCode = 201;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: 'Data received successfully', data: body }));
        });
    } else if (path === '/error') {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Simulated Server Error(500)\n');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404-pageNot Found');
    }
});
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
