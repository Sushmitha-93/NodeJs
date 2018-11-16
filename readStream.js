//in Streaming, no buffering happen, that is storing wont happen, so it is faster. Netflix,hotstar... are popular users in streaming

let fs=require('fs')

console.log("********START*******")

//path should have forward slash "/" otherwise use path package 
fs.readdir('C:/NodeJsTraining',function(err,data){ //first parameter is execured after that second parameter i.e function gets executed
    console.log("These are ",data.length," Directories")
    console.log(data)
})

console.log("*******END**********")