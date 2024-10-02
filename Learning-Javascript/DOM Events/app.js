let btn=document.querySelector("button");
btn.onclick=function(){
    console.log("Button was clicked !!");
    alert("Button was clicked !!");
}

let ELbtn=document.createElement("button");
ELbtn.innerText="Click me for event !!";
document.querySelector("body").append(ELbtn);

ELbtn.addEventListener("click",sayhello);
ELbtn.addEventListener("dblclick", alertingdblCLick);

function sayhello(){
    console.log("Hello World !!");
}
function alertingdblCLick(){
    console.log("Button was Double clicked !!");
}

let divBox=document.createElement("div");
document.querySelector("body").prepend(divBox);
divBox.style.height = "100px";
divBox.style.width = "100px";
divBox.style.border = "1px solid black";
divBox.style.backgroundColor = "greenyellow";
divBox.addEventListener("click", function(){
    console.log("div was clicked");
    divBox.style.backgroundColor = "aqua";
})

let thish1=document.querySelector("h2");
let thish3=document.querySelector("h3");
let thisp=document.querySelector("p");
let thisbtn=document.querySelector(".btnbutton");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor="greenyellow";
}

thish1.addEventListener("click", changeColor);
thish3.addEventListener("click", changeColor);
thisp.addEventListener("click", changeColor);
thisbtn.addEventListener("click", changeColor);

