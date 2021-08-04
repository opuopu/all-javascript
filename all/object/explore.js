// // let array = [ 34,56,78,90];


// // //  array er modde object rakhar system
// // let array2 = [

// //     {
    
// //         name:"rkib",
// //        class: 12,
// //         age:56,
       
        

    
// //     },
// //     {
    
// //         name:"rkib",
// //        class: 12,
// //         age:56,
       
        

    
// //     }
 
// // ]

// // // array2.name =  "hridoy";
// // // console.log(array2.name);

// for( var i in  array2){
    
//     console.log(array2[i]);

// // // }

// // // console.log(array2.person);

// // array er index ner korar modern way
// // console.log(Object.keys(array2));
// // array er value ber korar modern way
// // console.log(Object.values(array2));



// // function

// function plus( num1, num2){
//     var increment = num1+num2;
//     return increment;
// }
// var result = plus( 20,10);
// // console.log("result =" + " " + result);

// function mainus( num1, num2){
//     var decrement = num1-num2;
//     return decrement;
// }
// var result = mainus( 20,10);
// console.log( 'result = '+ ' '+ result);


// // string value by for loop
// let name = [ "opu", "akhi", "hridoy", "tonmoy"]

// for( var i = 0; i< name.length; i++) {
//     console.log(name[i])
// }

for( var i = 5; i<=20;  i +=5 ){
 var sum = i + 5;
    // console.log(sum);
}



for ( j = 0; j<=10; j++){

    var sum = j + 3;
    if( j === 4 || j ===5 ){
        continue;
     

    }
    // console.log(sum);
}
// 

var object = {

    name: "opu",
    age:36,
    class:9,
}

object[ "name"] = " 4000";
object.sum = "akhi"
console.log(object);

console.log(Object.keys(object));
console.log(Object.values(object));