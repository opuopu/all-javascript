x = 10;
y = 50;
z = 60


function density(miles){

    if( miles <= 10){
        let first = miles*10
        return first;
    }
    else if( miles >= 11 && miles <= 20){

        let first10 = 10* x;

      let  second10 = miles - 10
        let second = second10 * y;
        let totalaniml = first10 + second;
        return totalanimal;
    }
    else if ( miles >= 21 && miles<= 30){
        let first10 = 10* x;

        let second = 10 * y;
        const ftos = first10 + second 
      
        let third10 = miles - 20
        let third = third10 * z;
        let total = ftos + third;
        return total;
      
        
    }
    
}
let theResult = density(24);
console.log(theResult);