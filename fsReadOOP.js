class Employee{
    constructor(name,eno,add)
    {
        this.name=name;
        this.eno=eno;
        this.add=add;
    }    
    DisplayEmp(){
        console.log("Name - ",this.name)
        console.log("ENo - ",this.eno)
        console.log("Address - ",this.add)
    }
}
let fs=require('fs')

fs.readFile("employee.json",function(err,data){
    data=JSON.parse(data)
    for(let i=0;i<data.length;i++)
    {
        let emp=new Employee(data[i].name,data[i].eno,data[i].address);
        emp.DisplayEmp();
    }
})