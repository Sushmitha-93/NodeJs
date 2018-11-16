let express=require('express') //must, npm install express, as express in not a core package
let myserver=express()         // instance of express will create server

let bodyParser=require('body-parser')                 //for POST, must, npm install body-parser
myserver.use(bodyParser.urlencoded({extended:false})) //for POST, to get Body object from POST request


//myserver.get("/",(req,res)=>{    //For GET method

myserver.post("/",(req,res)=>{     //For POST menthod
    
    //console.log("QUERY STRING: ",req.query) //req.query is used only for GET method. For POST, req.body is used
    console.log("QUERY STRING: ",req.body)    //for POST

    res.send("<h1 align=center>Welcome Registration "+req.body.name+" </h1>") //req.query.name for GET
    res.end();
})

myserver.listen(8080,()=>console.log("listening to 8080"))


//use function is processed before request and response are processed in js. Before res.send().
//use must always have next() otherwise controller will not move on in the program