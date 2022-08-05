var heading = document.querySelector("#main-heading");

heading.addEventListener("mouseover", function(){
 //console.log("Mouse hover event");
});

var button = document.querySelectorAll("button")[0];

button.addEventListener("click", function(){
 //console.log("Click Event");
 document.querySelectorAll("button")[1].style.visibility = "hidden";

 button.addEventListener("click", function(){
    document.querySelectorAll("button")[1].style.visibility = "visible";
 });
});

document.querySelectorAll(".list-item").forEach(listItem => {
listItem.addEventListener("mouseover", function(){
//console.log("list is hovered");
listItem.style.color = "green";
});
});

//jQuery 

console.log($("h1").text());
console.log($(".secondary-cta").text("Hey Sakshi"));



//jQuery AJAX
$("#btn").click(function(){
   $.ajax(({
      url : "https://dummy.restapiexample.com/api/v1/employees",
      type : "GET",
      success : function(data){
         console.log(data);
      }
   }))
})