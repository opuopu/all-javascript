let array =[
    {

        name:" dell",
        price: 16000,
        quantity: 3,

    },
    {

        name:" phone",
        price: 1000,
        quantity: 2,

    },
    {

        name:" dell",
        price: 1600,
        quantity: 4,

    }
]

function quantitys( mega){

     let total = 0;
    for( const element of mega){

 let totalprice = element.price * element.quantity
 
    total = totalprice + total

    }
    return total;
}
let isnew = quantitys(array);
console.log(isnew);