let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "purple", "green", "red"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {

    if (started == false) {
        console.log("game started");
        started = true;

        levelup();
    }
});

function gameflash(btn) {

    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {

    btn.classList.add("userflash");

    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {

    userSeq = [];

    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);

    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`#${randcolor}`);

    gameSeq.push(randcolor);

    console.log(gameSeq);

    gameflash(randbtn);
}

function checkAns(idx) {

    if (userSeq[idx] === gameSeq[idx]) {

        if (userSeq.length == gameSeq.length) {

            setTimeout(levelup, 1000);
        }

    } else {

        h2.innerHTML = `Game Over! Press any key to restart`;

        reset();
    }
}

function btnPress() {

    let btn = this;

    userflash(btn);

    let usercolor = btn.getAttribute("id");

    userSeq.push(usercolor);

    console.log(userSeq);

    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {

    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
/*
let gameSeq=[];
let userSeq=[];
let btns=["yellow","purple","green","red"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
});


function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}
function levelup(){
    level++;
    h2.innerText=`Level ${level}`;
let randIdx=Math.floor(Math.random()*3);
let randcolor=btns[randIdx];
let randbtn=document.querySelector(`.${randcolor}`);

    //koi random button bhi chooose karega 
    console.log(randIdx);
    console.log(randcolor);
    console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randbtn);


}
function btnPress(){
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    console.log(usercolor);

}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
*/
