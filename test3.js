/*let f1=(a)=>{
		return a*a
	    }

let result=f1(10);

console.log(result);*/

//WITHOUT BRACKETS SINCE ITS ONE LINE
/*let f1= a=> a*a	    

let result=f1(10);

console.log(result);*/

//WITH {}
/*let f1= a=> {
	a*a	    
	}
let result=f1(10)

console.log(result); // UNDEFINED, if {} is used, explicit return must be used
*/

/*let f1= a=> {
	return a*a	    
	}
let result=f1(10)

console.log(result); //100, as return is used inside {}
*/

//MULITPLE ARGUMENTS SHOULD BE INSIDE () 
/*let f1= (a,b)=> {
	return a*b	    
	}
let result=f1(10,20)

console.log(result);
*/


//TO EXECUTE FUNCTION ONLY ONCE - (Self invoking function expression - SIFE)
/*let f1= function (a,b){     
	return a*b	    
	}(10,20)

console.log(f1);*/

//if fat arrow is used for above ex., the definition and call should be separated with ()
let f1= ((a,b)=>{     
	return a*b	    
	})(10,20)

console.log(f1)

