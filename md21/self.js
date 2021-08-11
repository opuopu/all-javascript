// let array = [ 4,6,8,3,5]

// function isreturn(arr){
// let n = 0;
//     for( let element of arr){

//         if( element %2 ==0){
//   n.push(element);
//         }
//         else{

//             break;
//         }
//     }
   
// }
// let total = isreturn(array)
// console.log(total);




// // feetToInch

// function feetToInch(feet){


//     let result = feet *12

//     return result;
// }

// let thefeet = feetToInch(8);
// // console.log(thefeet);


// // centimeterToMeter

// function centimeterToMeter(cent){


//     let total = cent* 0.01;

//     return total;
// }
// let theAnswer  = centimeterToMeter(10000);
// console.log(theAnswer);


// // paperRequirements

// function paperRequirements( num1,num2,num3){


//     let mulitipy = num1+num2+num3

//     return mulitipy;
// }
// let totalMultipy = paperRequirements(100,200,300);
// console.log(totalMultipy);

//  bestFriend
let array = [ "opu", "akhi","hridoy", "opus6", "akhi5"]
function bestFriend(arr){
let big = "";
    for( const element of arr){

        if(  element.length == 5 ){
        big = element;
        break;
        }
    }
   return big;
}
let end = bestFriend(array)
console.log(end)

// //  
// function isbook( num1,num2,num3){

//     let firstbook = 100* num1;
//     let secondbook = 200* num2;
// let thirdbook = 300*num3;

// let total = firstbook + secondbook + thirdbook
// return total;
// }
// let copy = isbook(2,4,4)
// console.log(copy);



//  largest

let largest = [ 3,4,5,13,7,8,9];

function islargest(arr){
let store = arr[0];
    for(const value of arr){
store += value;
    
    }
    return store;
}
let isdone = islargest(largest)
console.log(isdone);


//  80


    let friend  = [ "akhis", "opu" ,"hrdoy"]
