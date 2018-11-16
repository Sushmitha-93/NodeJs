let express=require('express') //how we require modules
let app=express() //instance of express creates server internally

app.get("/",(req,res)=>{
    res.send("<h1 align=center>Welcome to Express Home</h1>")
    res.end
})

app.get("/products",(req,res)=>{
    let products=["Television","Radio","Mobile"]
    res.send("<h1 align=center>"+JSON.stringify(products)+"</h1>")
    res.end
})

app.get("/json",(req,res)=>{
    let info=["Apparels","Shoes","Bags"]
    res.send("<h1 align=center>"+JSON.stringify(info)+"</h1>")
    res.end
})

app.listen(8080,()=>console.log("Listening to 8080...."))

