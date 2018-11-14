var http=require('http') //how we require modules

http.createServer(function(request,response){
	response.writeHead(200);  //status code in header
	response.write("<h1 align=center>Hello Sushmitha</h1>");  //Response body
	response.end();           //close connection
}).listen(8080);		  // Listen for connections on this port

console.log("Listening on port 8080..Press ctrl+c to end")

//node nodeServer.js  (to run the server)
//curl http://localhost:8080
