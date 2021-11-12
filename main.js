

const arr = ["Anna Girona",
            "Sonia",
            "Desiree",
            "Alisa",
            "Alexia",
            "Ana Casas",
            "Candy",
            "Yuliya",
            "Carmen",
            "Faby",
            "Gabrielle",
            "Gracia",
            "Helen",
            "Joana",
            "Judith",
            "Laura Campos",
            "Laura Conteras",
            "Marisa",
            "Rosa",
            "Sandra",
            "Sara",
            "Tamara",
            "Valentina",
            "Kristina"];

let resto = ["Anna Girona",
            "Sonia",
            "Desiree",
            "Alisa",
            "Alexia",
            "Ana Casas",
            "Candy",
            "Yuliya",
            "Carmen",
            "Faby",
            "Gabrielle",
            "Gracia",
            "Helen",
            "Joana",
            "Judith",
            "Laura Campos",
            "Laura Conteras",
            "Marisa",
            "Rosa",
            "Sandra",
            "Sara",
            "Tamara",
            "Valentina",
            "Kristina"];
let index = 0;
let number = 0;
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("resto").innerHTML=arr.map((item, i)=>`<li id="${i}">${item}</li>`);
  
});

const randomNumber = () =>{
  if(resto.length>0){
    number = Math.floor(Math.random()*resto.length);
    index = arr.findIndex(item => item === resto[number]);
    document.getElementById("winner").innerHTML=resto[number];
    resto.splice(number, 1);
    document.getElementById("total").innerHTML=resto.map((item, i)=>`<li>${item}</li>`);
  }else{
    document.getElementById("winner").innerHTML="no hay";
  }
}

const resetEver = () =>{
  resto = [...arr];
  document.getElementById("winner").innerHTML="";
  document.getElementById("total").innerHTML=resto.map((item, i)=>`<li>${item}</li>`);
  
}