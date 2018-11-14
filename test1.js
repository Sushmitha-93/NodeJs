/*var x=50;

var f1= function (y){
console.log(x); //Undefined
var x=60;
console.log(x); //60
console.log(y); //50

return "sushmitha"    

}

console.log(f1(x));*/



//WITHOUT VAR variables act like global
x=50;

var f1= function (y){
console.log(x); //50
x=60;
console.log(x); //60
console.log(y); //50

return "sushmitha"    

}

console.log(f1(x));

