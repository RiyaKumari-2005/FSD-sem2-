const server = require('http').createServer((req, res) => {
    res.setHeader('Content-Type','application/json');
    if(req.url==="/"){
        res.end("Home page");
    }
    else if(req.url==="/about"){
        res.end("About page");
    }
    else if(req.url==="/students"){
        res.end("Students page");
    }
});
server.listen(3000,()=>
    console.log('Server running on http://localhost:3000'));