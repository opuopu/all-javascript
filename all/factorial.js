let factorial = 1;
for(  var i = 1; i<=9; i++){

    factorial = factorial * i
}
console.log(factorial);


//  fuction diye factorial declare
function factr(number){

    let newfact = 1;
    for( let i  =1; i<= number; i++){

        newfact = newfact * i;
    }
    return newfact;
}
var result = factr(13);
console.log("this is result" + " " + result);


//  factorial number using while loop


//  while loop
let factorial2 = 1;
let j = 1;
while( j<=3){

    j++;
    factorial2 = factorial2 *i;
}
console.log(factorial2+ " " + "this is result");






funtion with while loop

function factorial(number){

    let i = 1;
    let fact = 1;
    while( i<=number){
i++;
fact = fact*i;

    
    }
    return fact;
}
let number = factorial(10);
console.log(" this is result"+  " "+ number);

decrementing loop

function factorial(number){

    let i = number;
    let fact = 1;
    while( i  >= 1){
        fact = fact *i;
        i --;
       
       
    }
    return fact;
}
let result = factorial(8);
console.log(result);

  decrementing loop by for

function factorial(number){

    
    let fact = 1;
    for( let i = number;  i >= 1; i-- ){

        fact = fact*i;
    }
    return fact;
}
let result = factorial(5);
console.log(result); 



 recursing factorial


!5 = 5 * 4 * 3 * 2 * 1
 fn = n*  n-1!


function factorial(n){

    if( n === 1){
        return 1;
    }
    return n* factorial(n-1)
}

let newone = factorial(5);
console.log(newone);
