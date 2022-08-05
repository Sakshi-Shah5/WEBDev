//first, refer to the file:  10.callbackhell.js to understand callbackhell then refer this 

function printAlphabets(alphabet, time){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log(alphabet);
        resolve("Promise has been resolved");
    } ,time);
    
   })
}

//promise chaining:
function printVowels(){
    printAlphabets("A",1000)
    .then(()=>printAlphabets("E", 2000))
    .then(()=>printAlphabets("I", 1000))
    .then(()=>printAlphabets("O", 4000))
    .then(()=>printAlphabets("U", 2000))


//    .catch(err=>console.log(err))
//  .finally(console.log("Promise has finished"))

}

printVowels();
