//console.log(f1()); //will give error, function hoisting doesnt happen

//var x=50;
//var name='Sushmitha'

//console.log(x);
//console.log(name);

var f1= function (){
console.log("hello")
	var a=function(){
		console.log("function dfined inside function");
			}
	a(); //calling inner function

return "sushmitha"    //if not defined, it will return undefined

}

console.log(f1);
console.log(f1());