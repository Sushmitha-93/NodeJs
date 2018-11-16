let express=require('express')
let bodyParser=require('body-parser')
let mongodb=require('mongodb')

var mongoClient=mongodb.MongoClient;

const url='mongodb://localhost:27017/test'
const dbName="test"

let empno,empname,address,company

let myserver=express()
myserver.use(bodyParser.urlencoded({extended:false}))
myserver.post("/",(req,res)=>{
    console.log("QUERY STRING: ",req.body)

     empno=parseInt(req.body.empno)
     ename=req.body.empname
     address=req.body.address
     company=req.body.company

     mongoClient.connect(url,function(err,client){
        if(err){
            console.log("Unable to connect ..",err)
        }
        else{
            console.log("Established connection Successfully !!")
    
            const db=client.db(dbName)
    
            //INSERT
           db.collection('mycollection').insertOne({empno:empno,empname:empname,address:address,company:company},function(err,data){
               console.log(data.insertedCount," ",data._id)
           })
          

           client.close()
            
        }
    })
    res.send("<h1 align=center>Registered Successfully</h1>") 
    res.end();
})

myserver.listen(8080,()=>console.log("listening to 8080"))



