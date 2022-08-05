//call : used when an object wnats to borrow a method defined in another object

var rahul = {
    name : "Rahul",
    profession : "Professor",
    age : 28,
    hobbies : ["Singing" , "Dancing"],
    workingBio : function(){
        console.log(this.name + " " + this.profession);
    }
}

var john = {
    name : "John",
    profession : "Dancer"
}


//now, if I want to call the workingBio function(which is defined inside rahul object) for john object , I will write :
rahul.workingBio.call(john);

//apply :
//the only difference between call and apply is that in apply,if there are any parameters inside the function, then those parameters are passed in an array

var geeta = {
    name : "Geeta",
    profession : "Pianist", 
    hobbies : ["Singing" , "Drawing"],
    workingBio2 : function(experience, age){
        console.log(this.name + " " + this.profession + " " + experience + " " + age);
    }
}

 geeta.workingBio2.apply(john , [6,25]);
 //in case of call, it would have been :
 //geeta.workingBio2.call(john, 6, 333);