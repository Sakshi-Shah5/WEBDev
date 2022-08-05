//first class functions

//1. function is assigned as a value to a variable 
//2. function is passed as a parameter to another function(callback function) :

var sayHello = function(){
    return "Hi, how are you?";
}

function greetings(name, helloMsg){
 console.log(name + helloMsg());
}

greetings("Soham ", sayHello);

//sayHello();



//3. Higher Order functions : a function can be returned by another function

function promotionCalculator(designation){
    if(designation == "Manager"){
        return function(experience){
            console.log("Promotion for " + designation + " with experience " + experience + " is Senior Manager");
        }
    }
    else{
        return function(experience){
            console.log("Promotion for " + designation + " with experience " + experience + " is based on experience");
        }
    }
}

var promotion = promotionCalculator("SDE");
promotion(5);

//OR we can can the function in this way too:
//promotionCalculator("Manager")(5);
