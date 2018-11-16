let http=require('http')
let url=require('url')

let myserver=http.createServer(function(req,res){
    console.log("Server created...")
    let uname=url.parse(req.url,true).query.username
    let pwd=url.parse(req.url,true).query.password
    if(uname=="sushmitha" && pwd=="pass")
    res.write('<h1 align=center> Login Successfull</h1>')
    else
    res.write("<h1 align=center>Login Failed</h1>")
    res.end
})
myserver.listen(8080,()=>console.log("Listening to 8080..."))
