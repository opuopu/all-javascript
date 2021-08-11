//  problem number -1

function seerToMon(seer){

    // thorw-error
    if( typeof seer != 'number' || seer <0 ){
        return " enter valid number"
    }
            
    const isMon = seer/40;
    return isMon;
}
//  calling-function
let totalMon = seerToMon(120);
console.log(totalMon);


//  problem-number-2

function  totalSales (shirtQuantity,pantQuantity,shoesQuantity){

    //  throw - eror
    if( typeof shirtQuantity != 'number' || typeof  pantQuantity != "number" || typeof shoesQuantity != "number"  ){
        return "enter valid number"
    }
    else if ( shirtQuantity <0 || pantQuantity< 0 || shoesQuantity <0){
        return " negative value not allow"
    }
   
    const ShirtPrice = 100* shirtQuantity ;
    const PantPrice = 200 * pantQuantity;
    const shoesPrice = 500 * shoesQuantity;
    let totalPrice = ShirtPrice + PantPrice + shoesPrice;
    return totalPrice;
}
// calling-function-2
let isSales = totalSales( 34,56,78);
console.log(isSales);


// problem-number-3

function deliveryCost(cost){
const first100 = 100;
const second100 = 80;
const thirdall = 50;
//  throw error
if( typeof cost != 'number' || cost <0  ){
    return " enter valid number"
}
    if( cost <= 100){
        let first =  cost * first100
        return first;
}
else if( cost >=101 && cost <= 200){
 let    firstCost = 100*first100;
 let second = cost - 100;
  let secondCost =  second * second100

  let total200 = firstCost + secondCost;
  return total200;
}
else{ 

    let firstCost = 100*first100;
    let secondCost = 100 * second100;
    const thirdresult = cost - 200;
    const thirdCost = thirdresult * thirdall;
    const totalfee =  firstCost + secondCost + thirdCost;
return totalfee;
}

}

//  calling - function - 3
let totalCost = deliveryCost(300);
console.log(totalCost);


// problem -number -4


function perfectFriend(friends){

    for( const element of friends){
        if( typeof element != 'string'){
            return "enter valid name "
        }
        if( element.length == 5){
            return element;
        
           
        }
    }
    // pass-error
    return 'not valid friend,enter a valid lengths'
}
//   calling - function-4
let perfect = perfectFriend([  "brek" ,"mamah", "rad", "tokon"] );
console.log(perfect);
