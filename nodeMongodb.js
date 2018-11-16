var mongodb=require('mongodb')  

var mongoClient=mongodb.MongoClient;

const url='mongodb://localhost:27017/test'
const dbName="test"

mongoClient.connect(url,function(err,client){
    if(err){
        console.log("Unable to connect ..",err)
    }
    else{
        console.log("Established connection Successfully !!")

        const db=client.db(dbName)

        //INSERT
       // db.collection('mycollection').insertOne({empno:7,empname:"sush"}) 

       //SELECT
       /*
       db.collection('mycollection').find().toArray(function(err,data){  
           if(err){
               console.log("Error in reading data")
           }
           else{
               console.log(data)
           }
       })
       */

       //DELETE
       let del=db.collection('mycollection').deleteOne({empno:5})
       console.log(del)

       client.close()
        
    }
})