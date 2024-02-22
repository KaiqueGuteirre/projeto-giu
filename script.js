let balaustre =document.getElementById("balaustre")
let grama =document.getElementById("grama")
let btn =document.getElementById("btn")
let header =document.querySelector("header");

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    balaustre.style.top = value * 0.40 + "px"; 
    grama.style.top = value * 0 + "px";  
    btn.style.marginTop = value * 1.5 + "px";  
    header.style.top = value * 0.5 + "px" 
})
