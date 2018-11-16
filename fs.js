let fs= require('fs')

let name="Sushmitha"

fs.writeFileSync('mydata.txt',name) //fs.writeFile('mydata.txt',name) will throw a callback error
/*
File transfer can be sychchronous or asynchronous
fs.writeFile is for asynchronous
*/
let jsonObject={'name':'Sushmitha','empno':'11375321','address':'Bengaluru'}

fs.writeFileSync('employee.json',JSON.stringify(jsonObject)) //JSON object should be converted to string