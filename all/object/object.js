// basic object structure
var family ={

    member: 30,
    name: "opu",
    pc:40,
    laptopName: "dell"
}
// output of family.(name)
console.log(family.name);
// change object property by 3 way

// way-1
family.pc = 4000;

// way-2
var pcprice = "pc";
family[pcprice]= 5000;

// console.log(pcprice);
// way-3
// console.log(family.pc);


var member ={
Storage:100,
name:"dell",
age: "1year",


}
console.log(member);

//  way-1

member.name = "hp";
// way-2
member["name"] = "walton";
// way-3 variable diye kora jay
var chnageName = "name";
member["chnageName"] = " samsung";
console.log(member.chnageName);

var computer = {

    model: " h2",
    price: 50000,
    name:"symphony",
}

computer.model = "  h5"

computer["model"] = " h59";

var change = "model";
computer.change = " jk999";
console.log(computer.change);
console.log(computer.model);