let fs=require('fs')
//let data=require('./employee.json')

fs.readFile("./employee.json",'utf-8',function(err,data){
    emp=JSON.parse(data)  //converting string to JSON
    for(let i=0;i<emp.length;i++)
    {
        console.log("*****EMP INFO******")
        console.log("name - ",emp[i].name)
        console.log("empno - ",emp[i].empno)
        console.log("address - ",emp[i].address)
    }

})

