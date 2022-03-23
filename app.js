// Basic Node server  ***STILL WORKING ON IT**
// HTML FILE WORKS

//Import http library
const http = require('http'); 
const fs = require('fs'); 
//Declare port to use for server
const port = 3000; 

//Create server
//Callback function takes in request (from browser to server) 
// and response (from server to browser) object
const server = http.createServer(function(req, res) {
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    //Status code HTTP 200 / OK
    res.writeHead(200, {"Content-Type": "text/html"});
    // fs.readFile('index.html', function(error, data) {
    //     if (error) {
    //     res.writeHead(404);
    //     res.write("Error: File Not Found");
    // } else {
    //     res.write(data);
    // }
    // res.end();
    // });
    fs.readFile('index.html', function(error, data) {
        if (error) {
        res.writeHead(404);
        res.write("Error: File Not Found");
    } else {
        res.write(data);
    }
    res.end(data);
    });
});

//Tell server to listen on declared port
//Once listening has started -> execute callback function
server.listen(port, function(error) {
    if (error) {
        console.log("Something went wrong", error);
    } else {
        console.log("Server is listening on port" + port);
    }
});

