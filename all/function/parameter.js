//  conditional-funtion
function example( name){
 
    if( name == "opu"){
        var fname = "md"+ ' ' + "opu"
        return fname;
    }
    else if( name == "mohammod"){
        var fname = "md"+ ' ' + "mohammod"
        return fname;
    }



}
var fullname = example("mohammod")
console.log(fullname);

// funtion example 2-------------------------------------------------



function singara(taka){
console.log("singara khao mama ");
}

singara(100);

// increment-mulitipication funtion

function number( num1, num2){

    var biyog = num1  - num2;

return biyog;
}
var thake = number(40,20);
console.log(thake);


//  funtion on condition and return 

function details( age, name, gender){

    var detail;
   
    if( age == 20  && name == "opu" ){

    detail = 19 + ' ' + 'opu' + ' '  + "male";
    }
    
    else{
    detail = "missonFailed"
    }
    return detail;
 
}
 total = details(20, "akhi", "male")
 console.log(total);