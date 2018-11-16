class Employee{
		constructor(empno,empname){
			this.empno=empno;        //"this" specifies the instance property
			this.empname=empname;
			}
		DisplayEmployee(){
			console.log("***************")
			console.log("EMPNO - ",this.empno)
			console.log("EMPNAME - ",this.empname)
			}
}
class ASE extends Employee{
	constructor(eno,ename,desig,RA){
		super(eno,ename)   // need to supply instance variable for parent too, must be first line in constructor
		this.desig=desig;
		this.RA=RA;
		}
	//DisplayASEDetails()
	  DisplayEmployee()          //Overiding by using same funtion name as parent
	{
	super.DisplayEmployee();                   //calling parent class method using super
	console.log("Designation - ",this.desig)
	console.log("Relocation Allowance - ",this.RA)
	}
}

let emp=new Employee(123,"sushmitha")  //as new is used, it is created in heap othewise its stack
emp.DisplayEmployee();

let ase= new ASE(123,"sush","ASE","10")
//ase.DisplayASEDetails();
ase.DisplayEmployee();     //using overidden funtion