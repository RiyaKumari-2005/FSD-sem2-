const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {

    console.log(req.method, req.url);

    // Home page
    if (req.url === "/" && req.method === "GET") {

        const filePath = path.join(__dirname, "index.html");

        fs.readFile(filePath, (err, data) => {

            if (err) {
                res.writeHead(500, {
                    "Content-Type": "text/plain"
                });

                res.end("Error loading HTML file");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(data);
        });

    }

    // CSS file
    else if (req.url === "/style.css" && req.method === "GET") {

        const filePath = path.join(__dirname, "style.css");

        fs.readFile(filePath, (err, data) => {

            if (err) {
                res.writeHead(404);
                res.end("CSS file not found");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/css"
            });

            res.end(data);
        });

    }

    // JavaScript file
    else if (req.url === "/script.js" && req.method === "GET") {

        const filePath = path.join(__dirname, "script.js");

        fs.readFile(filePath, (err, data) => {

            if (err) {
                res.writeHead(404);
                res.end("JavaScript file not found");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/javascript"
            });

            res.end(data);
        });

    }

    // Page not found
    else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 - Page Not Found");
    }

});

server.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});