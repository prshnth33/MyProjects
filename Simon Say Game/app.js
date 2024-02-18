let gameSeq = [];
let userSeq = [];
let btns = ["red","green","yellow","purple"];

let start = false;
let level =0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(start == false){
        start = true;
        levelUp();
    }
})

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`

    let ranIdx = Math.floor(Math.random()*4);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gameFlash(ranBtn);

    gameSeq.push(ranColor);
}

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },200)
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor)

    checkAns(userSeq.length-1);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200)
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game over Your score was <b>${level}</b> <br>Press Any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }

}

function reset(){
    start = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
