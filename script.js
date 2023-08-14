let moon = document.getElementById("moon");
let train = document.getElementById("train");
let text = document.getElementById("text");

let desert_moon = document.getElementById("desert-moon");
let man = document.getElementById("man");
window.addEventListener("scroll", ()=>{
    let value = window.scrollY;
    moon.style.top = value*.8 + "px";
    text.style.top = 90 + value* -0.2 + "%";
    train.style.left = value*1.4 + "px";
    desert_moon.style.top = 120 + value*.25 + "px";
    man.style.left = value*.6 + "px";
})
