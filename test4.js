//ASSIGNING JSON PARAMETERS TO VARIABLES

/*let employee = {"empno":123,"empname":"sushmitha","age":33,"address":"Bengaluru"};

let {empno,empname,age,address}= employee; //variable name should be same as the JSON key names


console.log(empno);
console.log(empname);	
console.log(age);		
console.log(address);	
*/

/*function f(x,...y){
	return x*y.length;
}
console.log(f(3,"hello",true,1)); //3*3 (y is an array of variable length, it is having "hello",true,1 here)
*/

//DEFAULT PARAMETER
function sum(a,b=20){
	return a+b;
}

//console.log(sum(10));  //10+20 = 30
console.log(sum(10,5));  //10+ 5 =15