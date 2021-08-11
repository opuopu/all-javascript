let array = [ "opu", "akhi", "hridoy", "hridoy", "habul", "kabul", "habul"]


function duplicate(array){

    const total = [];
    // const element =  array[i]
    for( let element of array){
if( total.indexOf(element) == -1){

    total.push(element);
}
    }

 
return total;
    
}

let newone = duplicate(array);
console.log(newone);



//  duplicate by value


let value1 = [ 3,4,6,7,3,5,6,3];

function isvalue(value1){
 let store = [];
    for( let value of value1){
if(store.indexOf(value) == -1){
store.push(value);
}

}
return store;

    }
let resultis = isvalue(value1);

console.log(resultis);