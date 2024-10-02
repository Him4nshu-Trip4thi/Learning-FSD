let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    // console.log("Random Color Generated !!");
    let h3=document.querySelector("h3");
    let randomColor=getRandomColor();
    h3.innerText=randomColor;
    h3.style.color=randomColor;
    console.log("The Color is Updated !!");

    let div=document.querySelector("div");
    div.style.backgroundColor=randomColor;

    // btn.style.backgroundColor=randomColor;
})


function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red}, ${green}, ${blue})`;
    return color;
}
