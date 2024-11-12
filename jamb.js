let myTimeInSec = 7200


let countdownDisplay = document.getElementById('countdown')
function countdown() {
    myTimeInSec -= 1;
    hrs = Math.floor(myTimeInSec / (60 * 60));
    mins = Math.floor((myTimeInSec % (60 * 60)) / 60);
    sec = Math.floor(myTimeInSec % 60);

    countdownDisplay.innerText = ` ${hrs} hours , ${mins} Minutes, ${sec} Second`


    let myho=document.getElementById('ho')
    let mymo=document.getElementById('mo')
    let myso=document.getElementById('so')
    
    myho.innerText= hrs;
    mymo.innerText=mins;
    myso.innerText=sec;
    
}


function ongod() {
    setInterval(() => {
        countdown()

    }, 1000);
}