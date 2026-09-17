const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set status code and headers
    res.writeHead(200, {
        "Content-Type": "text/plain",
        "X-Powered-By": "Node.js"
    });

    // Send response body
    res.end("Hello World");
});

// Start the server
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});