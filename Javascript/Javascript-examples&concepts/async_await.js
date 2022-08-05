//first, refer to the file:  11.promises.js to understand promises and .then() and why to avoid  it(promise chaining), then refer this :

function printAlphabets(alphabet, time){
    return new Promise((resolve,reject)=>{
     setTimeout(() => {
         console.log(alphabet);
         resolve("Promise has been resolved");
     } ,time);
     
    })
 }
 

 async function printVowels(){
    await printAlphabets("A",2000)
    await printAlphabets("E",1000)
    await printAlphabets("I",1000)
    await printAlphabets("O",4000)
    await printAlphabets("U",2000)

 }
 //we can use await keyword only if the function is asynchronous, and for that we use the async keyword. 
 
 printVowels();
 