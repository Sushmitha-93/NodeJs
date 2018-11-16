//Reading JSON from file in 2 ways - either require the file itself or call fs.readFile

var fs=require('fs')

//Require file itself
var data=require('./employee.json')
console.log(data[0].name)

//function(err,data) in fs.ReadFile returns error occured during read in err and returns data in data variable
//readFile happens asynchrously
fs.readFile("./employee.json",'utf-8',function(err,data){
    data=JSON.parse(data)  //converting string to JSON
    console.log(data[0].name)
})


