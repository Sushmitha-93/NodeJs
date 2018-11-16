var http=require('http') //how we require modules

http.createServer(function(request,response){
    response.writeHead(200);  //status code in header

    if(request.url=="/") //by default http://localhost:8080 has url property value as "/"
    response.write("<h1 align=center>Hello Sushmitha</h1>");  //Response body
    
    if(request.url=="/products")
    response.write("<h1 align=center>Displaying Products</h1>");

    if(request.url=="/json"){
        let empl=[{"name":"sushmitha"},{"emp":"123456"}];
        response.write(JSON.stringify(empl));
    }
    
    
	response.end();           //close connection
}).listen(8080);		  // Listen for connections on this port

console.log("Listening on port 8080")

//node nodeServer.js  (to run the server)
//curl http://localhost:8080