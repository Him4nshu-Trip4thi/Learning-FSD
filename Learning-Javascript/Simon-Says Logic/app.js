let gameSeq=[];
let userSeq=[];

let level=0;
let started=false;
let h3=document.querySelector("h3");

let btns=["one", "two", "three", "four"];

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game Started !!");
        started=true;
        levelUp();
    }
});

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level : ${level}`;
    let randomIdx=Math.floor(Math.random()*3);
    let randBox=btns[randomIdx];
    randBtn=document.querySelector(`.${randBox}`);
    gameSeq.push(randBox);
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    
    userBox=btn.getAttribute("id");
    userSeq.push(userBox);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
    
}

function checkAns(idx){
    console.log(`Current Level : ${level}`);
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
        console.log("Matched!!");
    }
    else{
        h3.innerHTML=`GAME OVER! Your score was <b>${level}</b> <br> Press any key to start...`;
        console.log("Game Over!");
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}