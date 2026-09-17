const http = require("http");

let items = ["Apple", "Banana"];

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");

    // GET
    if (req.method === "GET") {
        res.end(JSON.stringify(items));
    }

    // POST
    else if (req.method === "POST") {
        let body = "";

        req.on("data", chunk => body += chunk);

        req.on("end", () => {
            items.push(body);

            res.end(JSON.stringify({
                message: "Item added successfully",
                item: body
            }));
        });
    }

    // PUT
    else if (req.method === "PUT") {
        items[0] = "Updated Apple";

        res.end(JSON.stringify({
            message: "Item updated successfully",
            items: items
        }));
    }

    // DELETE
    else if (req.method === "DELETE") {
        items.pop();

        res.end(JSON.stringify({
            message: "Item deleted successfully",
            items: items
        }));
    }

    // Invalid method
    else {
        res.statusCode = 405;

        res.end(JSON.stringify({
            message: "Method Not Allowed"
        }));
    }
});

// Start server
server.listen(3000, () => {
    console.log("Server running at 3000");
});