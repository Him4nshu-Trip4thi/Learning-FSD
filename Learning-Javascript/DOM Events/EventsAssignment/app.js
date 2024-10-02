// let btn = document.querySelector("#btn");
// btn.style.backgroundColor="greenyellow";

// btn.addEventListener("click",function(){
//     let random=getRandomColor();
//     btn.style.backgroundColor=random;
//     console.log("The color changed !!");
// })

// function getRandomColor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     let color=`rgb(${red}, ${green}, ${blue})`;
//     return color;
// }


// let smt=document.querySelector("#smt");
// smt.addEventListener("click",function(event){
//     event.preventDefault();
//     let random=getRandomColor();
//     smt.style.backgroundColor=random;
//     console.log("The color changed !!");
// })

let h3=document.querySelector("h3");
let inp=document.querySelector("#inp");
inp.addEventListener("input",function(){
    console.log(inp.value);
    h3.innerText=inp.value;
})
