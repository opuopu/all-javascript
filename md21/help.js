// ------------------ problem-4-------------------
 
// ----------------------- Perfect Friend -----------------
 
function perfectFriend(names) {
 
 
    
 
 
 
    // --------------- function for perfectFriend------------
 
 for( const friend of names){

    if (typeof friend != "string") {
        return " Please Give a String!"
    }
    if( friend.length == 5){
        return friend;
    }

 }
 
}
let  bondhu = perfectFriend([ 'ayman', 'chomok', 'sadman']);
console.log(bondhu);

