//actual callback function using setTimeout

function printAlphabets1(alphabet,time){
    setTimeout(() => {
        console.log(alphabet);
    },time);
}

function printVowels1(){
    printAlphabets1("A",2000);
    printAlphabets1("E",1000);
    printAlphabets1("I",4000);
    printAlphabets1("O",6000);
    printAlphabets1("U",1000);

}

printVowels1();

//in this case, JS is not behaving as synchronous language i.e:
//since JS is a synchronous language, we expect that first A will be printed after 2 sec, then E after 1 sec, then I after 4 secs and so on i.e in order specified, but that's not the case, the output we get is E U A I O i.e according to the setTimeout time specified, for that solution we can use a callback function in the first function but that leads to callback hell: 




//callback hell
function printAlphabets(alpha, time, callback){
    setTimeout(() => {
        console.log(alpha);
        callback();
    } ,time);
}


function printVowels(){
    printAlphabets("A",2000, () => {
        printAlphabets("E",1000, () => {
            printAlphabets("I",4000, () => {
                printAlphabets("O",6000, () => {
                    printAlphabets("U",6000, () =>{

                    })
                })
            })
        })
    })
}

printVowels();

// this triangle pattern is called as callback hell which shall never be used because if any of the call back function takes a lot of time and is stucked,then none of the functions ahead of it will execute, so to avoid this, we use promises. 