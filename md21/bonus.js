

let number = [ "opu", "akhiopu ", "sohel"];




function isok(names){
    let store = []
    for(const element of names){
let naming = element;

        if( naming.indexOf("opu") != -1){
          store.push(naming)
            
        }
    }
 return store
}
 let answer = isok(number);
 console.log(answer);