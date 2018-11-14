var http = require('http')
var fs = require('fs')

http.createServer(function(req, res) {
    fs.readFile('index.html', function(error, data) {
        res.writeHead(200)
        res.write(data)
        res.end()
    })
}).listen(8080)

console.log("Listening to port 8080..")