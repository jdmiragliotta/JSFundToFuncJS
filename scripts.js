//Use this file to implement Part One of your project
var animal = {};

animal.username = "Bob";
//console.log(animal.username);
animal["tagline"] = "Hi I am Bob";
//console.log(animal["tagline"])
var noises = [];
animal.noises = noises;
//console.log(animal);

var count = 0;
for(var key in animal){
  count++;
  if (key === "username"){
    console.log("Hi my name is "+ animal[key]);
  }else if (key === "tagline"){
    console.log("I like to say "+ animal[key]);
  }
}