var ram = {
    name : "Ram",
    profession : "Professor",
    hobbies : ["Singing" , "Dancing"],
    workingBio : function(experience,age){
        console.log(this.name + " " + this.profession + " " + experience + " " + age);
    }
}

var shyam = {
    name : "Shyam",
    profession : "Dancer",
    hobbies : ["Singing" , "Dancing"],
    workingBio : function(experience,age){
        console.log(this.name + " " + this.profession + " " + experience + " " + age);
    }
}


//constructor function : called using new operator
function Person(name,profession){
    this.name = name;
    this.profession = profession;

}

var sita = new Person("Sita", "teacher" , ["swimming","skating"]); 
var sakshi = new Person("Sakshi", "SDE" , ["reading","badminton"]); 
// an empty object is created
//prototype objects are linked 
//newly created object is returned




//PROTOTYPES 

Person.prototype.workingBio = function(experience, age){
    console.log(this.name + " " + this.profession + " " + experience + " " + age);
} 

Person.prototype.age = 27;

console.log(sita);
console.log(sakshi);

sakshi.workingBio(2,23);

var sid = new Person("Sid", "Dancer");
console.log(sid);
shyam.workingBio(5,33);

//console.log(shyam.__proto__ == Person.prototype);    
console.log(sid.hasOwnProperty("age"));